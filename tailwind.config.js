/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'pop': ['Poppins', 'sans-serif']
      },
      colors:{
        'btn-blue': ['#1163FA'],
        'border-color': ['#D0D5DD']
      
      },
      backgroundImage:{
        'myBackImage' : "url('/src/assets/images/backgroundimg.jpg')",
        'myYummyImg' : "url('/src/assets/images/yummyphoto.jpg')"
      },
      width:{
        '400':'400px'
      },
      height:{
        ' 626.43': ' 626.43px'
      },
      fontSize:{
        'popNormal12' : ['12px',{
          fontWeight:'500',
          lineHeight:'18px'
        }],
        'popNormal16': ['16px',{
          fontWeight:'500',
          lineHeight:'24px'
        }],
        'pop14': ['14px',
       { fontWeight:'400',
        lineHeight:'21px'}
        ],
        'pop60016':['16px',{
          fontWeight:'600',
        lineHeight:'24px'
        }]
      }
    },
  },
  plugins: [],
}
