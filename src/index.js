var dataMember = [
    {search : "dieuquynhs9", src : "./Image/Diệu Quỳnh.png", name: "Diệu Quỳnh"},
    {search : "tiendus9", src : "./Image/Du Phạm.jpg", name: "Du Phạm"},
    {search : "hoangtrungs9", src : "./Image/Hoàng Trung.jpg", name: "Hoàng Trung"},
    {search : "vanchiens9", src : "./Image/Lê Chiến.jpg", name: "Lê Chiến"},
    {search : "minhtrangs9", src : "./Image/Minh Trang.jpg", name: "Minh Trang"},
    {search : "xuanbachs8", src : "./Image/Ngô Bách.jpg", name: "Xuân Bách"},
    {search : "thanhthaos8", src : "./Image/Thanh Thảo.jpg", name: "Thanh Thảo"},
    {search : "tramys9", src : "./Image/Trà My.jpg", name: "Trà My"},
    {search : "trunghieus8", src : "./Image/Trung Hiếuu.jpg", name: "Trung Hiếu S8"},
    {search : "trunghieus9", src : "./Image/Trung Hiếu.JPG", name: "Trung Hiếu S9"},
    {search : "xuanlocs9", src : "./Image/Xuân Lộc.jpg", name: "Xuân Lộc"},
    {search : "utloans8", src : "./Image/UtLoan.png", name: "Loan Bùi"},
    {search : "ngoctams8", src : "./Image/TTTam.png", name: "Ngọc Tâm"},
    {search : "thibinhs8", src : "./Image/binhdang.png", name: "Bình Đặng"},
    {search : "minhbinhs7", src : "./Image/luke.png", name: "Luke Shrek"},
    {search : "vietdungs8", src : "./Image/npvd.png", name: "Việt Dũng"},
    {search : "minhhongs8", src : "./Image/lmh.png", name: "Minh Hồng"},
    {search : "thixuans7", src : "./Image/xuannguyen.png", name: "Xuân Nguyễn"},
    {search : "tiendungs4", src : "./Image/thaidung.png", name: "Thái Dũng"},
]
var dataCard = [
    {search : "soi", src : "./Image/Soi.PNG", name: "Sói"},
    {search : "soinguyen", src : "./Image/SoiNguyen.png", name: "Sói Nguyền"},
    {search : "baove", src : "./Image/Bao ve.PNG", name: "Bảo Vệ"},
    {search : "cupid", src : "./Image/Cupi.PNG", name: "Cupid"},
    {search : "thosan", src : "./Image/Tho san.PNG", name: "Thợ Săn"},
    {search : "tientri", src : "./Image/Tien Tri.PNG", name: "Tiên Tri"},
    {search : "phuthuy", src : "./Image/Phu thuyu.PNG", name: "Phù Thủy"},
    {search : "dan", src : "./Image/Dan lang.PNG", name: "Dân Làng"},
    
]
var CurPlay = []
var CurCard = []
var PlayerWithWhatCard = []
var HTMLimgPlayer = document.querySelectorAll("[data-divPlayer]")
var HTMLimgCard = document.querySelectorAll("[data-card]")
function submitFormForName() {
    let x = document.forms["formForName"]["fname"].value.toLowerCase()
    document.forms["formForName"]["fname"].value = ''
    if(CurPlay.length == 12){
        alert("Enough people to play")
        return false
    }
    for(let i = 0; i < CurPlay.length; ++i){
        if(dataMember[CurPlay[i]].search == x){
            alert(x + " still play")
            return false
        }
    }
    var haveAns = 0
    for(let i = 0; i < dataMember.length; ++i){
        if(dataMember[i].search == x){
            CurPlay.push(i)
            haveAns = 1
            makeImageInHTMLPlayer(i)
            break
        }
    }
    if(haveAns == 0){
        alert("Not found " + x)
        return false
    }
}

function submitFormForCard() {
    let x = document.forms["formForCard"]["fname"].value.toLowerCase()
    document.forms["formForCard"]["fname"].value = ''
    if(CurCard.length == 12){
        alert("Enough card to play")
        return false
    }
    var haveAns = 0
    for(let i = 0; i < dataCard.length; ++i){
        if(dataCard[i].search == x){
            CurCard.push(i)
            haveAns = 1
            makeImageInHTMLCard(i)
            break
        }
    }
    if(haveAns == 0){
        alert("Not found " + x)
        return false
    }
}


function makeImageInHTMLPlayer(i){
    HTMLimgPlayer[CurPlay.length - 1].innerHTML = "<img class=\"rounded-circle\" data-player src=\"" + dataMember[i].src + "\"><h5>" + (CurPlay.length - 1) + ":" + dataMember[i].name + "</h5>"
    HTMLimgPlayer[CurPlay.length - 1].style.opacity = 1

}
function makeImageInHTMLCard(i){
    HTMLimgCard[CurCard.length - 1].innerHTML = "<img class=\"img-thumbnail\" src=\"" + dataCard[i].src + "\">"
    HTMLimgCard[CurCard.length - 1].style.opacity = 1;
}

for(let i = 0; i < HTMLimgPlayer.length; ++i){
    HTMLimgPlayer[i].addEventListener("dblclick", () => {
        if(HTMLimgPlayer[i].innerHTML == '') return
        HTMLimgPlayer[i].innerHTML = ''
        CurPlay.splice(i, 1)
        for(let j = i; j < 11; ++j){
            var indexH5 = HTMLimgPlayer[j + 1].innerHTML.indexOf("<h5>")
            var indexTwoDot = HTMLimgPlayer[j + 1].innerHTML.indexOf(":")
            if(indexH5 == -1 || indexTwoDot == -1){
                HTMLimgPlayer[j].innerHTML = '';
                break;
            }
            var fi = HTMLimgPlayer[j + 1].innerHTML.substring(0, indexH5 + 4)
            var se = HTMLimgPlayer[j + 1].innerHTML.substring(indexTwoDot, HTMLimgPlayer[j + 1].innerHTML.length)
            HTMLimgPlayer[j].innerHTML = fi + j + se
        }
        HTMLimgPlayer[11].innerHTML = ''
        return
    })
    HTMLimgPlayer[i].addEventListener("click", () => {
        if(HTMLimgPlayer[i].innerHTML == '') return
        HTMLimgPlayer[i].style.opacity = 1.3 - HTMLimgPlayer[i].style.opacity
    })
}

for(let i = 0; i < HTMLimgCard.length; ++i){
    HTMLimgCard[i].addEventListener("dblclick", () => {
        if(HTMLimgCard[i].innerHTML == '') return
        HTMLimgCard[i].innerHTML = ''
        CurCard.splice(i, 1)
        for(let j = i; j < 11; ++j)
            HTMLimgCard[j].innerHTML = HTMLimgCard[j + 1].innerHTML
        HTMLimgCard[11].innerHTML = ''
        return
    })
    HTMLimgCard[i].addEventListener("click", () => {
        if(HTMLimgCard[i].innerHTML == '') return
        HTMLimgCard[i].style.opacity = 1.3 - HTMLimgCard[i].style.opacity
        return
    })
}

var slideshow = 0
var start = 0
var fixedSizePlayer
HTMLslideshow = document.querySelector("[data-slideshow]")
function addImagetToSlideShow(i){
    HTMLslideshow.innerHTML = "<img class=\"rounded-circle\" data-player src=\"" + dataMember[CurPlay[i]].src + "\">"
    HTMLslideshow.innerHTML += "<img class=\"img-thumbnail\" data-player src=\"" + dataCard[CurCard[PlayerWithWhatCard[i].id]].src + "\">"
    HTMLslideshow.innerHTML += "<h3>" + dataMember[CurPlay[i]].name + " - " + dataCard[CurCard[PlayerWithWhatCard[i].id]].name + "</h3>"
}
function startGame(){
    if(CurPlay.length != CurCard.length){
        alert("number of players are not equal number of roles")
        return
    }
    slideshow = 0
    start = 1
    PlayerWithWhatCard = []
    fixedSizePlayer = CurPlay.length
    for(let i = 0; i < fixedSizePlayer; ++i)
        PlayerWithWhatCard.push({id: i, valueRandom: Math.random() * 100000})
    PlayerWithWhatCard.sort((a, b) => (a.valueRandom < b.valueRandom ? -1 : 1))
    console.log(PlayerWithWhatCard)
    addImagetToSlideShow(0)
}
document.addEventListener("keydown", (event) => {
    if(start == 0) return
    if(event.keyCode == 39){ //arrowright
        if(slideshow == fixedSizePlayer) return;
        slideshow++;
        if(slideshow == fixedSizePlayer) HTMLslideshow.innerHTML = ''
        else addImagetToSlideShow(slideshow)
    }
    if(event.keyCode == 37){
        if(slideshow == 0) return;
        slideshow--;
        addImagetToSlideShow(slideshow)
    }
})
