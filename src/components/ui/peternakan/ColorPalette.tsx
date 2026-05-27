import { defineComponent, type PropType } from 'vue';

export const colors = {
  // New Design System Colors - Brown Palette for Field Usage
  'primary':            { hex: '#3d2f24', name: 'Dark Brown' },
  'secondary':          { hex: '#a78d78', name: 'Light Brown' },
  'tertiary':           { hex: '#8b7355', name: 'Medium Brown' },
  'background':         { hex: '#faf8f5', name: 'Cream White' },
  'surface':            { hex: '#faf8f5', name: 'Surface Cream' },
  'surface-dim':        { hex: '#d4c9ba', name: 'Dimmed Surface' },
  'surface-container':  { hex: '#ede8e0', name: 'Container Brown' },
  'outline':            { hex: '#7a6f65', name: 'Outline Brown' },
  'error':              { hex: '#ba1a1a', name: 'Error Red' },

  // Backwards compatibility with the old colors
  // Canonical (brown-oriented) keys — prefer these names going forward
  'almond-beige':     { hex: '#E1D4C2', name: 'Almond Beige' },
  'coffee-brown':     { hex: '#A78D78', name: 'Coffee Brown' },
  'cornsilk':         { hex: '#FDFBF7', name: 'Off White' },
  'fawn':             { hex: '#C19A6B', name: 'Deer Brown' },
  'liver-dogs':       { hex: '#8B5E3C', name: 'Rust Wood' },

  'white':            { hex: '#FFFFFF', name: 'White' },
  'black':            { hex: '#000000', name: 'Black' },
  
  // Semantic colors for status states
  'success':          { hex: '#10b981', name: 'Success Green' },
  'warning':          { hex: '#f59e0b', name: 'Warning Amber' },
  'info':             { hex: '#3b82f6', name: 'Info Blue' },
  'healthy':          { hex: '#a78d78', name: 'Healthy Brown' },
  'pregnant':         { hex: '#c19a6b', name: 'Pregnant Light Brown' },
  'sick':             { hex: '#8b5e3c', name: 'Sick Dark Brown' },
};

export type ColorPaletteName = keyof typeof colors;

export default defineComponent({
  name: 'ColorPalette',
  props: {
    color: {
      type: String as PropType<ColorPaletteName>,
      required: true
    }
  },
  setup(props) {
    return () => {
      // Resolve incoming color prop to a canonical key in `colors`.
      const input = String(props.color || '').trim();
      const colorAliases: Record<string, ColorPaletteName> = {
        // historical/legacy names mapped to canonical keys
        'dark olive green': 'almond-beige',
        'dark-olive-green': 'almond-beige',
        'kombu green': 'coffee-brown',
        'kombu-green': 'coffee-brown',
        'liver (dogs)': 'liver-dogs',
        'liver-dogs': 'liver-dogs',
        'white': 'white',
        'black': 'black',
      };

      const resolveKey = (name: string): ColorPaletteName | undefined => {
        if (!name) return undefined;
        if ((name as keyof typeof colors) in colors) return name as ColorPaletteName;
        const lower = name.toLowerCase();
        if (lower in colorAliases) return colorAliases[lower];
        const hyphen = lower.replace(/\s+/g, '-').replace(/[()]/g, '').replace(/[^a-z0-9-]/g, '');
        if ((hyphen as keyof typeof colors) in colors) return hyphen as ColorPaletteName;
        return undefined;
      };

      const key = resolveKey(input);
      if (!key) return null;

      const colorData = colors[key];
      const hexNum = colorData.hex.substring(1);
      // Ensure good contrast based on brightness
      const isDark = ['coffee-brown', 'liver-dogs', 'black'].includes(key);
      const textColor = isDark ? '#FFFFFF' : '#000000';

      return (
        <div 
          class="d-flex flex-column justify-content-center align-items-center w-100 py-4"
          style={{ 
            backgroundColor: colorData.hex, 
            color: textColor,
            minHeight: '120px',
            border: (colorData.hex === '#FDFBF7' || colorData.hex === '#FFFFFF') ? '1px solid #EBEBEB' : 'none'
          }}
        >
          <h4 class="fw-bold mb-1" style={{ letterSpacing: '1.5px' }}>{hexNum}</h4>
          <span class="text-sm" style={{ opacity: 0.8, fontSize: '0.85rem' }}>{colorData.name}</span>
        </div>
      );
    };
  }
});
