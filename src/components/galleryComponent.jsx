import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
   {
     original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/334966703_582693256898317_7294911876053115485_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=_BC2txJdd70AX_3P9Lg&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfCOHUigkue53Ps9SQmFIl5p9i07DTaGoMdONyxsfTc20w&oe=646F6961',
     thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/334966703_582693256898317_7294911876053115485_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=_BC2txJdd70AX_3P9Lg&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfCOHUigkue53Ps9SQmFIl5p9i07DTaGoMdONyxsfTc20w&oe=646F6961',
     description: 'Aleister Crowley',
   },

   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/336642063_906962003818797_475249273586680509_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=oql_jslgwq0AX-K2DBd&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfA2qRVIzimGs_a5P0llHL0TYckdS003pzgXC56D3u4tMg&oe=646E9094',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/336642063_906962003818797_475249273586680509_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=oql_jslgwq0AX-K2DBd&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfA2qRVIzimGs_a5P0llHL0TYckdS003pzgXC56D3u4tMg&oe=646E9094',
      description: 'Lao Tse',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/337653254_2198785517176322_3284164964778808831_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=1eazQ57chUYAX-zKmHq&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfBBMJrIbgkbsUYwub8zXKIxQXKKo9UWMLtqjKUOTY9Szg&oe=646E008F',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/337653254_2198785517176322_3284164964778808831_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=1eazQ57chUYAX-zKmHq&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfBBMJrIbgkbsUYwub8zXKIxQXKKo9UWMLtqjKUOTY9Szg&oe=646E008F',
      description: 'Carl Gustav Jung',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/337901683_557622579525595_4280550568787285992_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=0oCm-1lBN1cAX-KL6Og&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfCi0O6ImjlsHt8MtgJhrga2DYdOj5C0g_x2ZdsacOwoYw&oe=646D7E02',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/337901683_557622579525595_4280550568787285992_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=0oCm-1lBN1cAX-KL6Og&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfCi0O6ImjlsHt8MtgJhrga2DYdOj5C0g_x2ZdsacOwoYw&oe=646D7E02',
      description: '',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/337870497_908886723691698_4075630543324704813_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=vNvDoleTAJMAX8_8rAe&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfA9FFywZZt070OSqBOH9GgahQUuaBtaWLMA4x8T_v0HtQ&oe=646EAF7A',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/337870497_908886723691698_4075630543324704813_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=vNvDoleTAJMAX8_8rAe&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfA9FFywZZt070OSqBOH9GgahQUuaBtaWLMA4x8T_v0HtQ&oe=646EAF7A',
      description: 'El Libro de Abramelin, Libro 1 de la magia sagrada',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/337540223_159763473668772_806754430246463738_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=WwcNYA54oaMAX8XxjEb&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfBJTj0mRyeac2kY7xmKHJQKDTnqjdTbmFDS4KhtfvPMgQ&oe=646EDC6C',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/337540223_159763473668772_806754430246463738_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=WwcNYA54oaMAX8XxjEb&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfBJTj0mRyeac2kY7xmKHJQKDTnqjdTbmFDS4KhtfvPMgQ&oe=646EDC6C',
      description: 'William Blake, El matrimonio del cielo y el infierno',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/338838957_1158355014855903_7866171351991198235_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=XGqmSIthe1wAX9aNQ3z&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfA4e4Bt8GkFKp_ByTHpqfkXnugAScpJwoG4pGb_4cYJsQ&oe=646F4279',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/338838957_1158355014855903_7866171351991198235_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=XGqmSIthe1wAX9aNQ3z&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfA4e4Bt8GkFKp_ByTHpqfkXnugAScpJwoG4pGb_4cYJsQ&oe=646F4279',
      description: 'Hermes Trismegisto',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/338854247_1612745222483775_74650470097005407_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=rG52IpVeJakAX8hggFt&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfD8p3WQnbIuCsHQv8ruFh13sGwwcb0dx5aVBcnsHHLRrA&oe=646D7CBD',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/338854247_1612745222483775_74650470097005407_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=rG52IpVeJakAX8hggFt&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfD8p3WQnbIuCsHQv8ruFh13sGwwcb0dx5aVBcnsHHLRrA&oe=646D7CBD',
      description: 'Dr. Stanislav Grof',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/338855437_128707260058568_3317865948233062197_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=AgdoN9brwGcAX93LoYV&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfAXW0vlStHaV-gS8pNHRQdA_neAroAe9pJ9BVIeMGYLyg&oe=646F1A6E',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/338855437_128707260058568_3317865948233062197_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=AgdoN9brwGcAX93LoYV&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfAXW0vlStHaV-gS8pNHRQdA_neAroAe9pJ9BVIeMGYLyg&oe=646F1A6E',
      description: 'J. Wolfgang Von Goethe',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/339319322_1716512812134856_7822997870119337843_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=la9J0xZiuOoAX8zeBnG&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfB0bKMntC9YsH1p_AFiCpfdTUrNrl4FoFfnpmwitldOkQ&oe=646E61D9',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/339319322_1716512812134856_7822997870119337843_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=la9J0xZiuOoAX8zeBnG&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfB0bKMntC9YsH1p_AFiCpfdTUrNrl4FoFfnpmwitldOkQ&oe=646E61D9',
      description: 'Yalal ad-Din Muhammad Rumi',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/338836348_1421930585219576_5929149839768591293_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=mZzkfgSjF70AX9HFaCg&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfAbWgGBGqdBrfl2ZO4ybQ4EvmR3NCDF9He7XDT8OjX3gw&oe=646E457D',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/338836348_1421930585219576_5929149839768591293_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=mZzkfgSjF70AX9HFaCg&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfAbWgGBGqdBrfl2ZO4ybQ4EvmR3NCDF9He7XDT8OjX3gw&oe=646E457D',
      description: 'Fernando Pessoa',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/339585230_207072378616210_3287262321736566332_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=OgBgC9IZv8QAX90SU3y&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfBrqi-6_YdMs8KfmQzi-Z58SympkqygoTxBfbVCnh0QMw&oe=646DCDB5',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/339585230_207072378616210_3287262321736566332_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=OgBgC9IZv8QAX90SU3y&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfBrqi-6_YdMs8KfmQzi-Z58SympkqygoTxBfbVCnh0QMw&oe=646DCDB5',
      description: 'Don Juan Matus, Carlos Castaneda, Relatos de Poder',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/339867230_9900284206663973_8204261423597105195_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=qn8ezfdfc2wAX9EH2La&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfCQamB2zVKHYRpDRVZN4kokKPgfMLgjzjlsuycUGA-k9w&oe=646EDD1A',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/339867230_9900284206663973_8204261423597105195_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=qn8ezfdfc2wAX9EH2La&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfCQamB2zVKHYRpDRVZN4kokKPgfMLgjzjlsuycUGA-k9w&oe=646EDD1A',
      description: 'Mircea Eliade, El Chamanismo y las Técnicas Arcaicas del Éxtasis.',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/340285082_738064704628271_3935053925391945400_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=RL5iCirZ2v0AX-jPvaV&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfCwOUPm87vJ9ONJWpVQyT9Svwj5ILj6DNFdOZyG7alWYA&oe=646E38CC',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/340285082_738064704628271_3935053925391945400_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=RL5iCirZ2v0AX-jPvaV&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfCwOUPm87vJ9ONJWpVQyT9Svwj5ILj6DNFdOZyG7alWYA&oe=646E38CC',
      description: 'Aldous Huxley, La Filosofía Perenne',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/340084796_759968262247493_2453063830919451150_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=PpaxTLfCRNIAX-P3UTM&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfCH8lPeI0gZ82iQXy4mteKF_NDqxqJ_NU4eh9DSgdylXA&oe=646E1A40',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/340084796_759968262247493_2453063830919451150_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=PpaxTLfCRNIAX-P3UTM&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfCH8lPeI0gZ82iQXy4mteKF_NDqxqJ_NU4eh9DSgdylXA&oe=646E1A40',
      description: 'Ritual de los Bacabes',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/340510078_168682736110161_7167748833424778589_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=na9DbOcFLcwAX9Al68X&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfDq9xqyvSvqEBqxKa15ve10BThlybn8miFS-k17S4liBg&oe=646F17C0',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/340510078_168682736110161_7167748833424778589_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=na9DbOcFLcwAX9Al68X&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfDq9xqyvSvqEBqxKa15ve10BThlybn8miFS-k17S4liBg&oe=646F17C0',
      description: 'Peter J. Carroll, Liber Null',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/340471118_750894996413143_7924200615639723668_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=3oKw5hN5HAEAX8L5zPb&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfDZ9e1Z2dYa7J40vPXS9r-WiJ0lN0KOOfqxiU8sUB-wTQ&oe=646F6A89',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/340471118_750894996413143_7924200615639723668_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=3oKw5hN5HAEAX8L5zPb&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfDZ9e1Z2dYa7J40vPXS9r-WiJ0lN0KOOfqxiU8sUB-wTQ&oe=646F6A89',
      description: 'Giordano Bruno',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/340283464_969944817331661_916351855991669174_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=A33ufVdGphUAX_vXH0Z&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfCzvwVnh5FY7WDJv_Xl_waFEz_kzFHBkzbXRhR9SToTVg&oe=646F2001',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/340283464_969944817331661_916351855991669174_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=A33ufVdGphUAX_vXH0Z&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfCzvwVnh5FY7WDJv_Xl_waFEz_kzFHBkzbXRhR9SToTVg&oe=646F2001',
      description: 'Códice Matritense',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/341148029_735005688406961_5022758616288873817_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=coJ0ksYnBsQAX99xPFH&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfAwyfNC47t97DxnhCk7f626TFd9PXAecfDVCfcu_R6s6w&oe=646EF936',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/341148029_735005688406961_5022758616288873817_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=coJ0ksYnBsQAX99xPFH&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfAwyfNC47t97DxnhCk7f626TFd9PXAecfDVCfcu_R6s6w&oe=646EF936',
      description: 'Terence Mckenna',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/341092453_263664439423306_1331688343817164854_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=5Cz0JezOZxYAX-nMk7h&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfAjEeI4l5P0JOP_loNk0JVqklefUK-eGfjvRK_M2xxMFg&oe=646DE429',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/341092453_263664439423306_1331688343817164854_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=5Cz0JezOZxYAX-nMk7h&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfAjEeI4l5P0JOP_loNk0JVqklefUK-eGfjvRK_M2xxMFg&oe=646DE429',
      description: 'Lao Tse, Tao Te Ching XV',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/340851259_234550055783531_6231743677925259560_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=PrZf9g1BmakAX_gxDPy&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfDzL_w0xBkOPUH3-qRkRjLqynsr4ZBC93E41n-362QMGA&oe=646DC544',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/340851259_234550055783531_6231743677925259560_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=PrZf9g1BmakAX_gxDPy&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfDzL_w0xBkOPUH3-qRkRjLqynsr4ZBC93E41n-362QMGA&oe=646DC544',
      description: 'Dr. Andrew Weil, The Natural Mind',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/341554357_770545251315869_7001022362735037811_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=MZRyhXshrw8AX_wSVfb&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfC61XDex3huhEXDpt9G4piDPU54VXwd9BPT9wG_VUHzWw&oe=646F6BE9',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/341554357_770545251315869_7001022362735037811_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=MZRyhXshrw8AX_wSVfb&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfC61XDex3huhEXDpt9G4piDPU54VXwd9BPT9wG_VUHzWw&oe=646F6BE9',
      description: 'Aleister Crowley, The Book of the Law',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/341207436_185901040936824_3795670147698461493_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=ZZ0hd5g1cvYAX8xDhrq&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfBiJ5riOZCMnLTOf6Our3K-uwWblj4LXWUsB1GBhpX9sg&oe=646E97D3',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/341207436_185901040936824_3795670147698461493_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=ZZ0hd5g1cvYAX8xDhrq&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfBiJ5riOZCMnLTOf6Our3K-uwWblj4LXWUsB1GBhpX9sg&oe=646E97D3',
      description: 'Robert Wordon Wasson, El camino a Eleusis',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/341709675_594663896055155_3982674952105251223_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=jm1oGg_bDHgAX9cn_jm&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfAHOxb6yqR8ChmBp9AuMw5dOp6UdMOeeP-RLOl5CI3MBQ&oe=646EDD57',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/341709675_594663896055155_3982674952105251223_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=jm1oGg_bDHgAX9cn_jm&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfAHOxb6yqR8ChmBp9AuMw5dOp6UdMOeeP-RLOl5CI3MBQ&oe=646EDD57',
      description: 'Hassan I Sabbah',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/341547666_6444892472212290_7652761427960325185_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=UjxFfeSISHoAX9USK7l&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfDfSAT28KNf-oYx5d1lFgJEqPNlZLVHyP38a8GqJDgESw&oe=646F6B9C',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/341547666_6444892472212290_7652761427960325185_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=UjxFfeSISHoAX9USK7l&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfDfSAT28KNf-oYx5d1lFgJEqPNlZLVHyP38a8GqJDgESw&oe=646F6B9C',
      description: 'Nikola Tesla',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/341699461_775982544267483_7502455071073161710_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=7uzMBE4ga-0AX9V_DLY&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfBWMTG2Rss5nwdFaUAJSlsiw5s45cpCGlSOxbiOq74KGg&oe=646DD2AD',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/341699461_775982544267483_7502455071073161710_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=7uzMBE4ga-0AX9V_DLY&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfBWMTG2Rss5nwdFaUAJSlsiw5s45cpCGlSOxbiOq74KGg&oe=646DD2AD',
      description: 'Joseph Campbell, El héroe de las mil caras',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/342034925_134255089533054_1471492420858645855_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=1NCBTQXnD_gAX8UE2wQ&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfCyNKHEczYwSBwF4l9s2pHHm9ummWwlVeIsvKjwRHZc-Q&oe=646F568B',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/342034925_134255089533054_1471492420858645855_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=1NCBTQXnD_gAX8UE2wQ&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfCyNKHEczYwSBwF4l9s2pHHm9ummWwlVeIsvKjwRHZc-Q&oe=646F568B',
      description: 'Carl Jung',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/341697964_889633472105995_3835953220222142354_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=WjRPz1uI3NEAX-zlwBx&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfD4DR4_B0IW6lOK2_G7CnaL0hAPYeeh7KkorJuW108Fxw&oe=646DE571',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/341697964_889633472105995_3835953220222142354_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=WjRPz1uI3NEAX-zlwBx&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfD4DR4_B0IW6lOK2_G7CnaL0hAPYeeh7KkorJuW108Fxw&oe=646DE571',
      description: 'Aldous Huxley',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/341681515_937716134314685_2644417756223522348_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=Flp3FNA7mFgAX93LSwx&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfAb0n5jVQpmWQnHKx1oABME2r0Ewz6EAlOMrnLdLjV9CA&oe=646E5B62',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/341681515_937716134314685_2644417756223522348_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=Flp3FNA7mFgAX93LSwx&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfAb0n5jVQpmWQnHKx1oABME2r0Ewz6EAlOMrnLdLjV9CA&oe=646E5B62',
      description: 'Tilopa',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/342419863_1226231488257988_5458729959511286280_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=0UD_KiSqkR8AX8uIh2x&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfCfHwKeLlx_ObU1iJvC9XqsbuKg935zweDSd_Z0vQjy1w&oe=646F29ED',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/342419863_1226231488257988_5458729959511286280_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=0UD_KiSqkR8AX8uIh2x&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfCfHwKeLlx_ObU1iJvC9XqsbuKg935zweDSd_Z0vQjy1w&oe=646F29ED',
      description: 'Peter J. Carroll, Psyber Magick',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/342539349_966819787814128_5851854585393521249_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=2fzvXNCnWl4AX9gtVUn&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfDI7iuLU4dGcm2JArflFl5tXrOR4ujna3-YDhWqnU5-pg&oe=646E96AF',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/342539349_966819787814128_5851854585393521249_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=2fzvXNCnWl4AX9gtVUn&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfDI7iuLU4dGcm2JArflFl5tXrOR4ujna3-YDhWqnU5-pg&oe=646E96AF',
      description: 'Lama Antonio Karam',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/343419146_247596727805304_7733049102846161911_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=QyJMBiFU_FcAX_4Q4CF&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfB9lahfCdKHFX9ju_N-pOSYM4FvGfZDgTVwAZayZmePBg&oe=646EA3E8',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/343419146_247596727805304_7733049102846161911_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=QyJMBiFU_FcAX_4Q4CF&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfB9lahfCdKHFX9ju_N-pOSYM4FvGfZDgTVwAZayZmePBg&oe=646EA3E8',
      description: 'Grant Morrison, Arkham Asylum',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/343684676_1180040322684309_5160807920698539094_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=KcjTmdXpBZIAX8o77Hq&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfBUbU0uwHLC7W3GcDIS5SDAK4I0rfj7Gejfx4Wd5uw8jA&oe=646E17DC',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/343684676_1180040322684309_5160807920698539094_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=KcjTmdXpBZIAX8o77Hq&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfBUbU0uwHLC7W3GcDIS5SDAK4I0rfj7Gejfx4Wd5uw8jA&oe=646E17DC',
      description: 'Claude Lévi-Strauss',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/343755817_192977903560247_1624084232833851803_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=YZf05c5fQkoAX-7OIuD&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfAp3bcDe4PeKhdqFhKkN4yLxvEvzI6SeqCO3XeF3J7pDA&oe=646E764C',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/343755817_192977903560247_1624084232833851803_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=YZf05c5fQkoAX-7OIuD&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfAp3bcDe4PeKhdqFhKkN4yLxvEvzI6SeqCO3XeF3J7pDA&oe=646E764C',
      description: 'Mircea Eliade, El Chamanismo y las técnicas arcaicas del extasis',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/343750454_209509191873245_5179320574733478890_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=-W8hRbd3q8kAX9FXTtU&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfA9v_hzOGNvh49jhc9WY6vLeBY2lFtJeGymWh6L4cGavw&oe=646DC920',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/343750454_209509191873245_5179320574733478890_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=-W8hRbd3q8kAX9FXTtU&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfA9v_hzOGNvh49jhc9WY6vLeBY2lFtJeGymWh6L4cGavw&oe=646DC920',
      description: 'Jean Delville',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/343748130_6851656001516967_8508224550925560998_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=3hMtnZZm484AX9qa9kC&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfDu2_-MJYztx0EM2JzEdVqrATO3azLg82og36CcTPh-nA&oe=646E3B3A',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/343748130_6851656001516967_8508224550925560998_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=3hMtnZZm484AX9qa9kC&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfDu2_-MJYztx0EM2JzEdVqrATO3azLg82og36CcTPh-nA&oe=646E3B3A',
      description: 'Francis Bacon',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/343948945_771992907867468_2897624124645963626_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=Bn0GlrBoeQcAX93pKf2&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfD4cDnN-wDKoDWPYWt7d0BJ5d6vG_vpUGpsLOo7bHARZg&oe=646DCBDA',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/343948945_771992907867468_2897624124645963626_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=Bn0GlrBoeQcAX93pKf2&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfD4cDnN-wDKoDWPYWt7d0BJ5d6vG_vpUGpsLOo7bHARZg&oe=646DCBDA',
      description: 'Mircea Eliade, El Yoga: Inmortalidad y libertad',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/344397117_1891984084522232_2237367879724458840_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=B-BfTZ9kYe8AX-W-aAF&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfA7SdIvxQ5ZL2EcS0cshTjK-pngQtxX2JUg9o9ahRQJdA&oe=646ED4F4',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/344397117_1891984084522232_2237367879724458840_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=B-BfTZ9kYe8AX-W-aAF&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfA7SdIvxQ5ZL2EcS0cshTjK-pngQtxX2JUg9o9ahRQJdA&oe=646ED4F4',
      description: 'Joseph Campbell',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/344272761_3519042181660932_6479199174084534587_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=k60dekP7fZEAX9-fRbq&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfAi7BMrpBfVJc_EXWbBnjI-jjCHz4132oDgkL5cwmSXnQ&oe=646E16D3',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/344272761_3519042181660932_6479199174084534587_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=k60dekP7fZEAX9-fRbq&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfAi7BMrpBfVJc_EXWbBnjI-jjCHz4132oDgkL5cwmSXnQ&oe=646E16D3',
      description: 'Carl Jung',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/344951850_187854047042558_5986694508592919450_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=0sqP4I5TfQIAX82zjfq&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfCaQ_QGnDSnrTiBohthnNoCwNlh0B_LfM5MkWl0044CMg&oe=646F1305',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/344951850_187854047042558_5986694508592919450_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=0sqP4I5TfQIAX82zjfq&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfCaQ_QGnDSnrTiBohthnNoCwNlh0B_LfM5MkWl0044CMg&oe=646F1305',
      description: 'Philip K. Dick',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/343993509_950247566005295_7348947608686815443_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=zAN493sHwGAAX9fBaoF&_nc_oc=AQlAaE9HzngXixDilQn7ekfW3yTXUXccFxrq7aZTxtUxC1ITIwJfIF8CWQNpjrRtuwY&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfB3URlu0lrTbYvioFYLBLwspcjdw2e-UQb2LxIQ5E5i5w&oe=646E1480',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/343993509_950247566005295_7348947608686815443_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=zAN493sHwGAAX9fBaoF&_nc_oc=AQlAaE9HzngXixDilQn7ekfW3yTXUXccFxrq7aZTxtUxC1ITIwJfIF8CWQNpjrRtuwY&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfB3URlu0lrTbYvioFYLBLwspcjdw2e-UQb2LxIQ5E5i5w&oe=646E1480',
      description: 'Don Juan, Carlos Castaneda, Viaje a Ixtán',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/344875925_172069448796572_9176093142509972155_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=cqDx_gOzSocAX_I3bIL&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfDyx7_Y3StQkFnia5AeiMnv0V-aTDaxNKRK7Tp7pe1f7g&oe=646E2901',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/344875925_172069448796572_9176093142509972155_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=cqDx_gOzSocAX_I3bIL&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfDyx7_Y3StQkFnia5AeiMnv0V-aTDaxNKRK7Tp7pe1f7g&oe=646E2901',
      description: 'Aleister Crowley, Diary of a Drug Friend',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/344930113_762157042252933_4133092269904067050_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=eejZc0dcAfgAX_APptS&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfC_fTGAU68NJE4J_cGkoX5CmvRhwfOyb6o6q2AWz_3L7w&oe=646F2053',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/344930113_762157042252933_4133092269904067050_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=eejZc0dcAfgAX_APptS&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfC_fTGAU68NJE4J_cGkoX5CmvRhwfOyb6o6q2AWz_3L7w&oe=646F2053',
      description: 'Jiddu Krishnamurti',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/344930244_957974751998991_112727524259048402_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=MgnuHdy6u6EAX-81GMB&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfDmmG0-xe9bPVlWIfrJr6aTiGPd0wKEmQ0LRAnTHCj-7g&oe=646F455C',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/344930244_957974751998991_112727524259048402_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=MgnuHdy6u6EAX-81GMB&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfDmmG0-xe9bPVlWIfrJr6aTiGPd0wKEmQ0LRAnTHCj-7g&oe=646F455C',
      description: 'Lao Tse, Tao Te Ching',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/345233384_187207570910435_8355685093322976020_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=fmDnC7pkTC8AX9LOzh8&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfCANh2EsKcOkr6pUkoxrZMcf727QqML_s3xGDIMtDc1Lw&oe=646EDB3C',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/345233384_187207570910435_8355685093322976020_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=fmDnC7pkTC8AX9LOzh8&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfCANh2EsKcOkr6pUkoxrZMcf727QqML_s3xGDIMtDc1Lw&oe=646EDB3C',
      description: 'Lama Tsondru',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/345594956_268780195503949_8597814908702131787_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=8nvvPa42370AX9zg-eg&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfB5mZTJu8b_mzIbiyEpfklV0Raz22sdq4dbe09UW01gdg&oe=646DE737',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/345594956_268780195503949_8597814908702131787_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=8nvvPa42370AX9zg-eg&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfB5mZTJu8b_mzIbiyEpfklV0Raz22sdq4dbe09UW01gdg&oe=646DE737',
      description: 'Peter J. Carroll, Liber Null',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/345860667_982579106065767_7464022331962605966_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=pX0M2Ort1XAAX_V0uFB&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfAwrCU_IZSQdBRuwOI2g8BDMT7mdlBurjbCzd7TgxNjvQ&oe=646F279D',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/345860667_982579106065767_7464022331962605966_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=pX0M2Ort1XAAX_V0uFB&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfAwrCU_IZSQdBRuwOI2g8BDMT7mdlBurjbCzd7TgxNjvQ&oe=646F279D',
      description: 'Thích Nhat Hanh',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/345265671_963780178149563_2698349752939685996_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=N59wGnuNMWMAX-kKdNA&_nc_oc=AQkHSftbPApOtJaXWnRnyqldJ5ltC_LEPjTRZUji9e840CZofK7WrDgDbvd7hy047eA&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfDYN3WeyqtibzjTAywqURO2wjTT3uY5uF75eHwlPKKuiQ&oe=646F3D1E',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/345265671_963780178149563_2698349752939685996_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=N59wGnuNMWMAX-kKdNA&_nc_oc=AQkHSftbPApOtJaXWnRnyqldJ5ltC_LEPjTRZUji9e840CZofK7WrDgDbvd7hy047eA&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfDYN3WeyqtibzjTAywqURO2wjTT3uY5uF75eHwlPKKuiQ&oe=646F3D1E',
      description: 'Mircea Eliade, El Yoga: Inmortalidad y Libertad',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/346271056_1873423239696362_5189981396598746244_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=EhfPr3RrVroAX-CuQrE&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfDo-WugoMoamPyVHKedSZeqH3_LdI0xjUAQ1itDw5p5Bg&oe=646F4888',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/346271056_1873423239696362_5189981396598746244_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=EhfPr3RrVroAX-CuQrE&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfDo-WugoMoamPyVHKedSZeqH3_LdI0xjUAQ1itDw5p5Bg&oe=646F4888',
      description: 'Joseph Campbell',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/346320236_6434806943208637_8561447332171806568_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=3aNwdrzmOfkAX9qQiPT&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfCkwCPwgcYRvGySVyVgRLpOj_HPyk5HSb_fwLD8wsLofQ&oe=646DD9C6',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/346320236_6434806943208637_8561447332171806568_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=3aNwdrzmOfkAX9qQiPT&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfCkwCPwgcYRvGySVyVgRLpOj_HPyk5HSb_fwLD8wsLofQ&oe=646DD9C6',
      description: 'Carl Jung, Psicología & Alquimia',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/345614097_172659222105672_5574812368942302433_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=Sh4yOCmu0tUAX9mq5Jm&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfAgVdtWiGvxAIWimzIOtO_N6atVYkWmzitaYRvW-HJYzA&oe=646DB134',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/345614097_172659222105672_5574812368942302433_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=Sh4yOCmu0tUAX9mq5Jm&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfAgVdtWiGvxAIWimzIOtO_N6atVYkWmzitaYRvW-HJYzA&oe=646DB134',
      description: 'Bhagavad Gita',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/346810749_1940225096339073_7180620639297840892_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=4jn8ZJaPmYYAX9MAt3G&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfBoVQP0IOURPAshqXhGRrkg8jhHdBIwqEbmAccJ7O9MWg&oe=646EED2B',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/346810749_1940225096339073_7180620639297840892_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=4jn8ZJaPmYYAX9MAt3G&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfBoVQP0IOURPAshqXhGRrkg8jhHdBIwqEbmAccJ7O9MWg&oe=646EED2B',
      description: 'John Symonds y Kenneth Grant, Introduccion, Magia(k) en Teoria y Práctica',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/347022917_1461923594620487_2398496058133216262_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=MHWOpydvmdgAX9sKAlL&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfAg6kGv6EWzCQN1BV5f27HdadseyrQYNSXBOWlRBTBSQw&oe=646DA2C6',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/347022917_1461923594620487_2398496058133216262_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=MHWOpydvmdgAX9sKAlL&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfAg6kGv6EWzCQN1BV5f27HdadseyrQYNSXBOWlRBTBSQw&oe=646DA2C6',
      description: 'Lisa McSherry, The Virtual Pagan: Exploring Wicca and Paganism Through the internet',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/347386592_960828218437129_7488709399254726740_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=H5SDyq-LP3EAX8fAkBH&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfCIVldQ0PNTR351I-1YHyBacDlRsRkfMpdux1GRv1Flrg&oe=646D918B',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/347386592_960828218437129_7488709399254726740_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=H5SDyq-LP3EAX8fAkBH&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfCIVldQ0PNTR351I-1YHyBacDlRsRkfMpdux1GRv1Flrg&oe=646D918B',
      description: 'Swami Sivananda',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/347380490_199357933020520_732309345803264781_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=bDRePXYRz2MAX_tJv4S&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfBYx0jJRjLsP3wBuJDA-dhOSdLyu2A_VegQsm7R2r0NUg&oe=646F444F',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/347380490_199357933020520_732309345803264781_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=bDRePXYRz2MAX_tJv4S&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfBYx0jJRjLsP3wBuJDA-dhOSdLyu2A_VegQsm7R2r0NUg&oe=646F444F',
      description: 'Sigmund Freud, Tótem y Tabú',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/348268434_654284359865407_3483172748585364652_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=zScew7v5_BEAX85V4hf&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfAgYacF24gU7QovhBNVjSz2yIrnZvCCP9IS5JttssmoCQ&oe=646E6137',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/348268434_654284359865407_3483172748585364652_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=zScew7v5_BEAX85V4hf&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfAgYacF24gU7QovhBNVjSz2yIrnZvCCP9IS5JttssmoCQ&oe=646E6137',
      description: 'César Calvo',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/348236905_656373303211454_5897775214307072549_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=_Q4r8K5B5HYAX8XGm70&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfBeYYE8fBzENSdF8cp_kzK3cnbPxgFFLCVYi1L4RRixtA&oe=646E41C4',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/348236905_656373303211454_5897775214307072549_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=_Q4r8K5B5HYAX8XGm70&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfBeYYE8fBzENSdF8cp_kzK3cnbPxgFFLCVYi1L4RRixtA&oe=646E41C4',
      description: 'Demócrito de Abdera',
   },
   {
      original: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/348266135_243880394908443_8596814556534205328_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=xxL0ZwFy2IIAX9k5pl6&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfCrFfKXrqqQSyYkz3Letzs4u9lNQn5BAPubV77eFoXoaA&oe=646E41B4',
      thumbnail: 'https://scontent.fgdl11-1.fna.fbcdn.net/v/t39.30808-6/348266135_243880394908443_8596814556534205328_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=xxL0ZwFy2IIAX9k5pl6&_nc_ht=scontent.fgdl11-1.fna&oh=00_AfCrFfKXrqqQSyYkz3Letzs4u9lNQn5BAPubV77eFoXoaA&oe=646E41B4',
      description: 'Rumi',
    },
 ];

 const GalleryComponent = () => (
   <div className='GalleryComponent'>
      <ImageGallery 
         items={images} 
         showPlayButton={false}
         disableThumbnailScroll={false}
      />
   </div>
 );
 
 export default GalleryComponent;