var tline = gsap.timeline();

tline
    .add('tog')

        .from(".nl,.nr",{
            y:-50,
            duration:1.5,
        },'tog')

        .from(".hero-img",{
            opacity:0,
            y:50,
            duration:1.5,
        },'tog')
        .from(".y2k",{
            opacity:0,
            y:60,
            duration:1.5,
        },'tog')

        .from(".bg-text",{
            scale:1.5,
            duration:1.5,
            

        },'tog')
        .from(".map-slider-con",{
            x:1000,
            duration:1.5,
            

        },'tog')