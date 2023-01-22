$(()=>{

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.addEventListener("refresh", () => {})

    //section interiorType move
    let interiorType = gsap.timeline({
        scrollTrigger: {
            trigger : '.interiorType',
            start : 'center center',
            scrub : true,
            pin : true,
            end : '+=7000',
            markers : true,
        }
    })

    //처음 글씨 움직임
    interiorType.to('.move_txt1',{
        'transform':'translateX(-140%)',
        duration:2
    })
    interiorType.to('.move_txt2',{
        'transform':'translateX(-50%)',
        duration:2
    },"<")
    interiorType.to('.move_txt3',{
        'transform':'translateX(50%)',
        duration:2
    },"<")
    interiorType.to('.move_txt4',{
        'transform':'translateX(165%)',
        duration:2
    },"<")

    //글씨 잠시 유지
    interiorType.to('.interiorType_txtBox',{
        'opacity':'1',
        duration:2
    })

    //글씨 없어짐
    interiorType.to('.interiorType_txtBox',{
        'opacity':'0',
        duration:2
    })

    //modern txt나옴
    interiorType.to('.modern',{
        'opacity':'1',
        'display':'block',
        duration:3
    })

    //modern 이미지올라옴 
    interiorType.to('.type_wrap',{
        'transform':'translateY(-33%)',
        ease: "none",
        duration:10,
    },"<")
    
    //modern txt 없어짐 + NATUAL txt나옴
    interiorType.to('.modern',{
        'opacity':'0',
        'display':'none',
        duration:1
    })
    interiorType.to('.natual',{
        'opacity':'1',
        'display':'block',
        duration:1
    },"<")

    //NATUAL 이미지 올라옴 + NATUAL txt나옴
    interiorType.to('.type_wrap',{
        'transform':'translateY(-60%)',
        ease: "none",
        duration:10
    })

    // NATUAL txt없어짐 + classic txt나옴
    interiorType.to('.natual',{
        'opacity':'0',
        'display':'none',
        duration:1
    })
    interiorType.to('.classic',{
        'opacity':'1',
        'display':'block',
        duration:1
    },"<")

    //classic 이미지 올라옴 
    interiorType.to('.type_wrap',{
        'transform':'translateY(-86.5%)',
        ease: "none",
        duration:10
    })

    // classic txt없어짐 + unique txt나옴
    interiorType.to('.classic',{
        'opacity':'0',
        'display':'none',
        duration:1
    })
    interiorType.to('.unique',{
        'opacity':'1',
        'display':'block',
        duration:1
    },"<")

    //unique 이미지 올라옴
    interiorType.to('.type_wrap',{
        'transform':'translateY(-113%)',
        ease: "none",
        duration:10
    })

    // section interiorType move
    let lifestyleDesignTop = gsap.timeline({
        scrollTrigger: {
            trigger : '.lifestyleDesign',
            start : 'top center',
            scrub : true,
            onLeaveBack : ()=>{ 
                $('.lifestyleDesign_wrap').removeClass('back')
                $('.interiorType').removeClass('back')
            },
            onEnter : ()=>{ 
                $('.lifestyleDesign_wrap').addClass('back')
                $('.interiorType').addClass('back')
            },
            markers : true,
        }
    })
    

    // section interiorType move
    let lifestyleDesign = gsap.timeline({
        scrollTrigger: {
            trigger : '.lifestyleDesign',
            start : 'bottom bottom',
            scrub : true,
            pin : true,
            end : '+=7000',
            markers : true,
        }
    })

    
    //첫이미지에서 잠시 멈춤
    lifestyleDesign.to('.lifestyleDesign_wrap',{
        'transform':'translateX(0%)',
        duration:5
    })
    //이미지 움직임
    lifestyleDesign.to('.lifestyleDesign_wrap',{
        'transform':'translateX(-83.5%)',
        duration:60
    })
    //마지막 이미지에서 잠시 멈춤
    lifestyleDesign.to('.lifestyleDesign_wrap',{
        'transform':'translateX(-83.5%)',
        duration:5
    })
    

    //unchangeableValue 이미지 커짐
    let unchangeableValue = gsap.timeline({
        scrollTrigger: {
            trigger : '.unchangeableValue',
            start : 'top',
            scrub : true,
            pin : true,
            end : '+=1500',
            markers : true,
        }
    })
    //이미지 나옴 + txt 나옴
    unchangeableValue.to('.valuePc',{
        'transform':'scale(1.0)',
        duration:5
    })
    unchangeableValue.to('.unchangeableValue_con',{
        'opacity':'1',
        duration:5
    },"<")

    //이미지와 txt 잠시 유지
    unchangeableValue.to('.valuePc',{
        'transform':'scale(1.0)',
        duration:3
    })
    unchangeableValue.to('.unchangeableValue_con',{
        'opacity':'1',
        duration:3
    },"<")


    























})