import { defineComponent, type PropType } from 'vue';

export const colors = {
  'dark-olive-green': { hex: '#606C38', name: 'Dark olive green' },
  'kombu-green':      { hex: '#283618', name: 'Kombu green' },
  'cornsilk':         { hex: '#FEFAE0', name: 'Cornsilk' },
  'fawn':             { hex: '#DDA15E', name: 'Fawn' },
  'liver-dogs':       { hex: '#BC6C25', name: 'Liver (dogs)' },

  // Allow passing the exact name from the image as well:
  'Dark olive green': { hex: '#606C38', name: 'Dark olive green' },
  'Kombu green':      { hex: '#283618', name: 'Kombu green' },
  'Cornsilk':         { hex: '#FEFAE0', name: 'Cornsilk' },
  'Fawn':             { hex: '#DDA15E', name: 'Fawn' },
  'Liver (dogs)':     { hex: '#BC6C25', name: 'Liver (dogs)' },
  
  'white':            { hex: '#FFFFFF', name: 'White' },
  'black':            { hex: '#000000', name: 'Black' },
  'White':            { hex: '#FFFFFF', name: 'White' },
  'Black':            { hex: '#000000', name: 'Black' },
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
      const colorData = colors[props.color];
      if (!colorData) return null;

      const hexNum = colorData.hex.substring(1);
      // Ensure good contrast based on brightness
      const isDark = ['dark-olive-green', 'kombu-green', 'liver-dogs', 'Dark olive green', 'Kombu green', 'Liver (dogs)', 'black', 'Black'].includes(props.color);
      const textColor = isDark ? '#FFFFFF' : '#000000';

      return (
        <div 
          class="d-flex flex-column justify-content-center align-items-center w-100 py-4"
          style={{ 
            backgroundColor: colorData.hex, 
            color: textColor,
            minHeight: '120px',
            border: (colorData.hex === '#FEFAE0' || colorData.hex === '#FFFFFF') ? '1px solid #EBEBEB' : 'none'
          }}
        >
          <h4 class="fw-bold mb-1" style={{ letterSpacing: '1.5px' }}>{hexNum}</h4>
          <span class="text-sm" style={{ opacity: 0.8, fontSize: '0.85rem' }}>{colorData.name}</span>
        </div>
      );
    };
  }
});
