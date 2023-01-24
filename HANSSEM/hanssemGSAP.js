$(()=>{

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.addEventListener("refresh", () => {})

    
    let interiorType = gsap.timeline({
        scrollTrigger: {
            trigger : '.interiorType',
            start : 'center center',
            scrub : true,
            pin : true,
            end : '+=7000',
        }
    })
    //처음 글씨 움직임
    interiorType.to('.move_txt1.pc',{ 'x':'-140%', duration:2 })
                .to('.move_txt2.pc',{ 'x':'-50%', duration:2 },"<")
                .to('.move_txt3.pc',{ 'x':'50%', duration:2 },"<")
                .to('.move_txt4.pc',{ 'x':'165%', duration:2 },"<")
                .to('.move_txt1.mo',{ 'x':'10%', duration:2 })
                .to('.move_txt2.mo',{ 'x':'-10%', duration:2 },"<")
                .to('.move_txt3.mo',{ 'x':'10%', duration:2 },"<")
                .to('.move_txt4.mo',{ 'x':'-10%', duration:2 },"<")
    //글씨 잠시 유지
                .to('.interiorType_txtBox',{ 'opacity':'1', duration:2 })
    //글씨 없어짐
                .to('.interiorType_txtBox',{ 'opacity':'0', duration:2 })
    //modern txt나옴
                .to('.modern',{ 'transform': 'translateX(0%)', 'opacity':'1', 'display':'block', duration:3 })
    //modern 이미지올라옴 
                .to('.type_wrap',{ 'transform':'translateY(-33%)', ease: 'none', duration:10, },"<")
    
    //modern txt 없어짐 + NATUAL txt나옴
                .to('.modern',{ 'opacity':'0', 'display':'none', duration:3 })
                .to('.natual',{ 'transform': 'translateX(0%)', 'opacity':'1', 'display':'block', duration:3 },"<")
    //NATUAL 이미지 올라옴 + NATUAL txt나옴
                .to('.type_wrap',{ 'transform':'translateY(-60%)', ease: 'none', duration:10 })
    // NATUAL txt없어짐 + classic txt나옴
                .to('.natual',{ 'opacity':'0', 'display':'none', duration:3 })
                .to('.classic',{ 'transform': 'translateX(0%)', 'opacity':'1', 'display':'block', duration:3 },"<")
    //classic 이미지 올라옴 
                .to('.type_wrap',{ 'transform':'translateY(-86.5%)', ease: 'none', duration:10 })
    // classic txt없어짐 + unique txt나옴
                .to('.classic',{ 'opacity':'0', 'display':'none', duration:3 })
                .to('.unique',{ 'transform': 'translateX(0%)', 'opacity':'1', 'display':'block', duration:3 },"<")
    //unique 이미지 올라옴
                .to('.type_wrap',{ 'transform':'translateY(-113%)', ease: 'none', duration:10 })
    // section interiorType 배경 색 변경
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
        }
    })
    // section interiorType move
    let lifestyleDesign = gsap.timeline({
        scrollTrigger: {
            trigger : '.lifestyleDesign',
            start : 'bottom bottom',
            scrub : true,
            pin : true,
            end : '+=9000',
            onUpdate : self =>{
                console.log(self.progress)
                if(self.progress > 0.50 && self.progress < 0.66){
                    $('.life_video video').get(0).load();
                }
                else if(self.progress > 0.672 && self.progress < 0.68){
                    $('.life_video video').get(0).play();
                }
            }
        }
    })
    //첫이미지에서 잠시 멈춤
    lifestyleDesign.to('.lifestyleDesign_wrap',{ 'transform':'translateX(0%)', duration:1 })
    //이미지 움직임
                   .to('.lifestyleDesign_wrap',{ 'transform':'translateX(-83.5%)', ease: 'none', duration:20 })
    //마지막 이미지에서 txt1 나옴
                   .to('.life_txt1',{ 'transform':'translate(-50%,-50%)', 'opacity':'1', duration:2 })
    //마지막 이미지에서 txt1 유지
                   .to('.life_txt1',{ duration:2 })
    //마지막 이미지에서 txt1사라짐 + 다음 동영상 나옴
                   .to('.life_txt1',{ 'opacity':'0', duration:3.5 })
                   .to('.life_video',{ 'opacity':'1', duration:3.5 },"<")
    //동영상 잠시 유지
                   .to('.life_video',{ duration:2 })
    //동영상 사라짐 + 마지막 텍스트 나옴
                   .to('.life_video',{ 'opacity':'0', duration:3.5 })
                   .to('.life_txt2',{ 'transform':'translate(-50%,-50%)', 'opacity':'1', duration:3.5 },"<")
    //마지막 텍스트 유지
                   .to('.life_txt2',{ 'transform':'translate(-50%,-50%)', 'opacity':'1', duration:3.5 })
    //unchangeableValue 이미지 커짐
    let unchangeableValue = gsap.timeline({
        scrollTrigger: {
            trigger : '.unchangeableValue',
            start : 'top',
            scrub : true,
            pin : true,
            end : '+=1500',
        }
    })

    //이미지 나옴 + txt 나옴
    unchangeableValue.to('.value',{ 'transform':'scale(1.0)', duration:5 })
                     .to('.unchangeableValue_con',{ 'opacity':'1', duration:5 },"<")

    //이미지와 txt 잠시 유지
                     .to('.value',{ 'transform':'scale(1.0)', duration:3 })
                     .to('.unchangeableValue_con',{ 'opacity':'1', duration:3 },"<")


    //expertConsultation 
    let expertConsultation  = gsap.timeline({
        scrollTrigger: {
            trigger : '.expertConsultation',
            start : 'top center',
        }
    })

    expertConsultation.to('.expert_box:nth-of-type(1)',{ y: 0, opacity:1, duration:0.5, ease: "none" })
                      .to('.expert_box:nth-of-type(2)',{ y: 0, opacity:1, duration:0.5, delay: 0.2, ease: 'none' },"<")
                      .to('.expert_box:nth-of-type(3)',{ y: 0, opacity:1, duration:0.5, delay: 0.4, ease: 'none' },"<")
        
    

        

        
})