const audio = document.querySelector('audio')

const modal = document.querySelector('.modal')
const modalLeft = document.querySelector('.content-left')
const modalRight = document.querySelector('.content-right')
const view = document.querySelector('.content-middle')

const lixi = document.querySelectorAll('.wrapper-lixi')
const thiep = document.querySelector('.thiep')

const handleView = () => {
    modalLeft.style.transitionDuration = "1s"
    modalLeft.style.transform = "translateX(-100%)"

    modalRight.style.transitionDuration = "1s"
    modalRight.style.transform = "translateX(100%)"

    view.style.transitionDuration = "1s"
    view.style.transform = "translateY(700px)"
    
    var tempInterval = null;
    tempInterval = setInterval(() => {
        modal.style.opacity = `${+modal.style.opacity - 0.01}`; 

        if (+modal.style.opacity <=0)  {
            clearInterval(tempInterval)
            modal.remove()
        };
    }, 10) 

}

view.onclick = () => {
    audio.play()
    handleView()
}

const listThiep = [
    {
        id: 1,
        title: `Năm hết Tết đến, rước lộc vào nhà, quà cáp bao la, mọi nhà no đủ,
        vàng bạc đầy tủ, gia chủ phát tài, già trẻ gái trai, sum vầy hạnh`,
        fontSize: 44,
    },
    {
        id: 2,
        title: `Happy New Year 2024! Chúc bạn có một bầu trời sức khỏe, một biển cả tình thương, một đại dương tình bạn, một điệp khúc tình yêu, một người yêu chung thủy, một sự nghiệp sáng ngời, một gia đình thịnh vượng. Chúc cả gia đình bạn vạn sự như ý, tỷ sự như mơ, triệu triệu bất ngờ, không chờ cũng đến!`,
        fontSize: 33,
    },
    {
        id: 3,
        title: `Xuân đến rồi, đây là thời khắc thiêng liêng nhất. Chỉ mong năm nay mọi sự như ý với bản thân và những người tri kỉ, người thân của mình. Một năm Giáp Thìn trọn vẹn niềm vui và thành công. Chúc mừng năm mới.`,
        fontSize: 39,
    },
    {
        id: 4,
        title: `Kính chúc một năm mới an lành! Hy vọng mỗi ngày của năm 2024 sẽ mở ra những cánh cửa mới, mang đến cơ hội và niềm vui mới cho chúng ta!`,
        fontSize: 45,
    },
    {
        id: 5,
        title: "Năm hết Tết đến, rước lộc vào nhà, quà cáp bao la, mọi nhà no đủ, vàng bạc đầy tủ, gia chủ phát tài, già trẻ gái trai, sum vầy hạnh phúc.",
        fontSize: 45,
    },
]

const handleHideThiep = () => {            

    var tempInterval = null;
    tempInterval = setInterval(() => {
        thiep.style.opacity = `${+thiep.style.opacity - 0.01}`; 

        if (+thiep.style.opacity <=0)  {
            clearInterval(tempInterval)
            thiep.style.visibility = "hidden";
        };
    }, 10) 
}

const handleShowThiep = () => {            

    thiep.style.visibility = "visible";
    var tempInterval = null;
    tempInterval = setInterval(() => {
        thiep.style.opacity = `${+thiep.style.opacity + 0.02}`; 

        if (+thiep.style.opacity >=1)  {
            thiep.style.opacity = 1;
            clearInterval(tempInterval)
        };
    }, 20) 
}

for (let temp of lixi ) {
    temp.onclick = (e) => {
        e.preventDefault();
        handleShowThiep()
        thiep.onclick = () => {
            handleHideThiep()
        }

        const temp_thiep =(temp.getAttribute("data-lixi"));

        listThiep.forEach((element) => {
            if (+element.id === +temp_thiep) {
                document.querySelector(".content-thiep > div").innerHTML = `${element.title}`;
                document.querySelector(".content-thiep").style.fontSize = `${element.fontSize}px`;
            }
        })

    }
}