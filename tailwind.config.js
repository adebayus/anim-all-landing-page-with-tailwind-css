// tailwind.config.js
module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		// backgroundColor: (theme) => ({
		// 	...theme("colors"),
		// 	'syellow': "#ff9f00",
		// 	'dblue': "#2e4960",
		// 	'cwhite': "#f5e7d1",
		// }),

		// colors: {
		// 	syellow: "#ff9f00",
		// 	dblue: "#2e4960",
		// 	cwhite: "#f5e7d1",
		// 	sorange: "#f2994a",
		// },
		extend: {
            borderRadius:{
                '36.5px' : '36.5px',
            },
            backgroundImage : {
                'heroScetion' : "url('./assets/image.png')"
            },
            margin : {
                '156px' : '156px',
                '150px' : '150px',
                '142px' : '142px',
                '139px' : '139px',
                '128px' : '128px',
                '109px': '109px',
                '60px' : '60px',
                '58px' : '58px',
                '56px' : '56px',
                '47px' : '47px',
                '43px' : '43px',
                '40px' : '40px',
                '38px' : '38px',
                '35px' : '35px',
                '28px' : '28px',
                '27px' : '27px',
                '23px' : '23px',
                '20px' : '20px',
                '18px' : '18px',
                '7px' : '7px',
                '6px'  : '6px',
            },
            boxShadow: {
                '044' : '0px 4px 4px rgba(0, 0, 0, 0.25)',
            },
            padding:{
                '277px' : '277px',
                '145px' : '145px',
                '137px' : '137px',
                '128px' : '128px',
                '186px' : '186px',
                '113px' : '113px',
                '97px' : '97px',
                '86px' : '86px',
                '43px' : '43px',
                '30px' : '30px',
                '27px' : '27px',
                '23px' : '23px',
                '18px' : '18px',
                '6px' : '6px',
                'collapse' : '0.05px'

            },
            minHeight : {
                '50px' : '50px',
            },
            width: {
                '1348px': '1348px',
                "976px": "976px",
                "803px": "803px",
                '510px' : '510px',
                '484px' : '484px',
                '300px' : "300px",
                '289px' : "289px",
                '242px' : "242px",
                '147px' : '147px',
                '91px' : '91px',
                '42px' : '42px',
                '4px' : '4px',
			},
			height: {
                
                "976px": "976px",
                '182px' : '182px',
                '147px' : '147px',
                '105px' : '105px',
                '91px' : '91px',
                '73px' : '73px',
                '67px' : '67px',
                '42px' : '42px',
                '4px' : '4px',
            },
			lineHeight: {
                '28px' : '28px',
                '26px' : '26px',
				"leading-1.4": "1.4",
				"leading-1.6": "1.6",
                "leading-normal": "normal",
                "22.5px": "22.5px",
			},

			letterSpacing: {
				"tracking-0.75": "0.75px",
                "tracking-0.3px": "0.3px",
                
                "neg-0.3px": "-0.3px",
			},

			fontSize: {
                '48px' : ['48px','48px'],
                '25px' : ['25px'],
                '18px' : ['18px','27px'],
                '15px' : ['15px','19.53px'],
                "13px" : ["13px",'48px'],
                '24px' : ['24px','24px']
			},

			fontFamily: {
				poppins: "Poppins",
			},
			colors: {
				syellow: "#ff9f00",
				dblue: "#2e4960",
				cwhite: "#f5e7d1",
				sorange: "#f2994a",
				syellow: {
					100: "#FFFFE5",
					200: "#FFFFcc",
					300: "#FFFFB3",
					400: "#FFFF99",
					500: "#FFFF7F",
					600: "#FFFF66",
					700: "#FFEC4D",
					800: "#FFD233",
					900: "#FFB91A",
				},
				sorange: {
					400: "#FFFFE3",
					600: "FFFFB0",
                    800: "#FFCC7D",
                    900: '#f2994a'
				},
				dblue: {
					400: "#C7E2F9",
					600: "#94AFC6",
                    800: "#617C93",
                    900: '#2e4960'
				},
				cwhite: {
					400: "#fbf5ed",
					600: "#f9f1e3",
					800: "#f5e7d1",
				},
			},

			// backgroundColor: {
			// 	'syellow': "#ff9f00",
			// 	'dblue': "#2e4960",
			// 	'cwhite': "#f5e7d1",
			// },
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
