// 스피드는 Default 값이 400
const speed = 2000;
const delay = 2000;
let timer;
const imgSize = -1920;

$(function(){
    // html이 로딩 되면 실행하는 jquery-method
    // 3초 이후에 move 함수를 1번만 실행
    start();
    // hover(mouseenter, mouseleave);
    $("#visual .slider").hover(stop, start);
    // $(".slider a").mouseover(stop);
    // $(".slider a").mouseout(start);
    // $(".arrow").hover(function(){
    //     $(this).css({opacity: 1, boxShadow: '0 0 40px 20px aqua'})
    // }, function(){
    //     $(this).css({opacity: 0.5, boxShadow: 'none'})
    // });
});

function start(){
    timer = setTimeout(move, delay);
    console.log("타이머 START");
}

// 비주얼 영역의 이미지가 자동으로 움직이기로 로직
function move(){
    $(".images").animate({marginLeft: imgSize}, speed, function(){
        // 애니메이션이 다 종료되고 후처리 작업 시 사용
        // 재귀함수 : 함수 안에서 자기 자신을 호출하는 함수
        const firstLi = $(".vimg").first();
        const lastLi = $(".vimg").last();
        $(this).css("margin-left", 0);
        // li.vimg 태그 중 마지막 li 뒤에 첫 번쨰 li를 배치
        lastLi.after(firstLi);
        start();
    });
}

function stop(){
    console.log("타이머 STOP");
    clearTimeout(timer);
}