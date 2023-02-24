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
        'border-color': ['#D0D5DD'],
        'bar-offline' : ['#888888'],
        'bar-section' : ['#F2F4F7'],
        'mygradient': ['linear-gradient(90deg, #FF0000 0%, #FAFF00 10.94%, #00FB37 28.65%, #00F0FF 47.92%, #000AFF 65.1%, #FF00E5 83.33%, #FF0000 100%)'],
        'box-stroke' :['#D0D5DD'],
        'text-color' : ['#1D2939']
      
      },
      backgroundImage:{
       'myBackImage' :"url('/src/assets/images/backgroundimg.jpg')"
      },
     
      width:{
        '400':'400px'
      },
      height:{
        ' 626.43': ' 626.43px',
        'importantHeight': '500px' 
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
        }],
        'pop40012':['12px',{
          fontWeight:'400',
          lineHeight:'18px'
        }],
        'pop40010':['10px',{
          fontWeight:'400',
          lineHeight:'15px'
        }]
      }
    },
  },
  plugins: [],
}
