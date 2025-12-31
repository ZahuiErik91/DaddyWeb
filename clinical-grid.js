// CLINICAL GRID - Interactive Canvas Background
// Converted from React to Vanilla JS

class ClinicalGrid {
  constructor(canvasElement) {
    this.canvas = canvasElement;
    this.ctx = this.canvas.getContext('2d');
    this.animationFrameId = null;
    
    // Mouse tracking
    this.targetMousePos = { x: -9999, y: -9999 };
    this.currentMousePos = { x: -9999, y: -9999 };
    
    // Visual configuration
    this.FONT_SIZE = 11;
    this.COL_WIDTH = 80;
    this.ROW_HEIGHT = 22;
    this.FLASHLIGHT_RADIUS = 300;
    this.LERP_FACTOR = 0.08;
    
    // Real app data vocabulary
    this.DATA_TOKENS = [
      // Core States
      "S0_INTAKE", "S1_STABILIZE", "S2_ALLIANCE", "S3_ASSESS", "S4_INTERVENE", "S5_MAINTAIN",
      // Technical Architecture
      "UUID_V4", "KEYCHAIN_SECURE", "SUPABASE_SYNC", "LOCAL_STORAGE", "AES_256", "OPENROUTER",
      // Clinical Metrics
      "VALENCE_NEG", "AROUSAL_HI", "DOPAMINE_LVL", "CRAVING_LOG", "URGE_SURF", "RELAPSE_PREV",
      // Analysis Terms
      "PATTERN_RECOG", "DISTRESS_6", "GROUNDING", "BREATHING", "COGNITIVE_REFRAME",
      // Syntax
      "::", "->", "[]", "{}", "NULL", "TRUE", "AWAIT", "ASYNC"
    ];
    
    this.grid = [];
    
    // Bind methods
    this.handleResize = this.handleResize.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.render = this.render.bind(this);
    
    this.init();
  }
  
  init() {
    // Event listeners - use window for mouse tracking since canvas is behind content
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseleave', this.handleMouseLeave);
    
    // Initial setup
    setTimeout(() => this.handleResize(), 10);
    this.render();
  }
  
  initGrid() {
    this.grid = [];
    const cols = Math.ceil(this.canvas.width / this.COL_WIDTH) + 1;
    const rows = Math.ceil(this.canvas.height / this.ROW_HEIGHT);
    
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        // Staggered grid (honeycomb)
        const xOffset = (y % 2 === 0) ? 0 : this.COL_WIDTH / 2;
        const xPos = x * this.COL_WIDTH + xOffset - 20;
        const yPos = y * this.ROW_HEIGHT + this.ROW_HEIGHT;
        
        // Only add cells that are above the footer boundary
        if (!this.footerBoundary || yPos < this.footerBoundary) {
          this.grid.push({
            x: xPos,
            y: yPos,
            baseX: xPos,  // Store original position
            baseY: yPos,
            text: this.DATA_TOKENS[Math.floor(Math.random() * this.DATA_TOKENS.length)],
            phase: Math.random() * Math.PI * 2,
            driftPhaseX: Math.random() * Math.PI * 2,  // Autonomous drift
            driftPhaseY: Math.random() * Math.PI * 2,
            breathPhase: Math.random() * Math.PI * 2   // Individual breathing
          });
        }
      }
    }
  }
  
  handleResize() {
    const dpr = window.devicePixelRatio || 1;
    
    // Use viewport dimensions for full-page background
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Calculate footer height to exclude from canvas rendering
    const footer = document.querySelector('.site-footer');
    const footerHeight = footer ? footer.offsetHeight : 0;
    
    this.canvas.width = width * dpr;
    this.canvas.height = height * dpr;
    
    this.ctx.scale(dpr, dpr);
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;
    
    // Store footer boundary for render clipping
    this.footerBoundary = height - footerHeight;
    
    this.initGrid();
  }
  
  handleMouseMove(e) {
    // Use clientX/Y directly since canvas covers full viewport at fixed position
    this.targetMousePos = {
      x: e.clientX,
      y: e.clientY
    };
  }
  
  handleMouseLeave() {
    this.targetMousePos = { x: -9999, y: -9999 };
  }
  
  render() {
    // Interpolate mouse (fluid feel)
    const dx = this.targetMousePos.x - this.currentMousePos.x;
    const dy = this.targetMousePos.y - this.currentMousePos.y;
    
    this.currentMousePos.x += dx * this.LERP_FACTOR;
    this.currentMousePos.y += dy * this.LERP_FACTOR;
    
    // Clear entire canvas with light background
    this.ctx.fillStyle = '#f5f5f7';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Font settings
    this.ctx.font = `500 ${this.FONT_SIZE}px "Menlo", "Monaco", "Courier New", monospace`;
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    
    const time = Date.now() / 1500;
    const breathTime = Date.now() / 3000;  // Slower breathing cycle
    
    this.grid.forEach(cell => {
      // AUTONOMOUS DRIFT - makes the grid "float" and move organically
      const driftX = Math.sin(breathTime * 0.5 + cell.driftPhaseX) * 8;
      const driftY = Math.cos(breathTime * 0.3 + cell.driftPhaseY) * 6;
      
      // Apply drift to position
      cell.x = cell.baseX + driftX;
      cell.y = cell.baseY + driftY;
      
      // BREATHING SCALE - text size pulses
      const breathScale = 1 + Math.sin(breathTime + cell.breathPhase) * 0.15;
      
      // Distance from flashlight
      const distX = cell.x - this.currentMousePos.x;
      const distY = cell.y - this.currentMousePos.y;
      const dist = Math.sqrt(distX * distX + distY * distY);
      
      // Save context for scale transformation
      this.ctx.save();
      this.ctx.translate(cell.x, cell.y);
      this.ctx.scale(breathScale, breathScale);
      
      if (dist < this.FLASHLIGHT_RADIUS) {
        // Illuminated state
        const intensity = 1 - Math.pow(dist / this.FLASHLIGHT_RADIUS, 1.5);
        
        // Rainbow gradient with wave effect
        const hue = (cell.baseX * 0.2 + time * 50 + cell.baseY * 0.1) % 360;
        const saturation = 70 + Math.sin(breathTime + cell.phase) * 10;
        const lightness = 50 - (intensity * 10);
        
        this.ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${intensity})`;
      } else {
        // Dormant state (breathing)
        const breath = Math.sin(breathTime + cell.phase);
        const opacity = 0.03 + (breath + 1) * 0.06;  // More dramatic breathing
        
        this.ctx.fillStyle = `rgba(100, 116, 139, ${opacity})`;
      }
      
      // Draw at origin (0,0) since we translated
      this.ctx.fillText(cell.text, 0, 0);
      this.ctx.restore();
    });
    
    this.animationFrameId = requestAnimationFrame(this.render);
  }
  
  destroy() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseleave', this.handleMouseLeave);
    cancelAnimationFrame(this.animationFrameId);
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('clinical-grid-canvas');
  if (canvas) {
    new ClinicalGrid(canvas);
  }
});

