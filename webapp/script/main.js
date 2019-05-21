// rank 가져오는 구문 추가 하기(실제로 돌릴때는 ajax로)
function getRank() {
    let searchTop = new Array();

    searchTop.push("test1");
    searchTop.push("test2");
    searchTop.push("test3");
    searchTop.push("test4");
    searchTop.push("test5");
    searchTop.push("test6");
    searchTop.push("test7");
    searchTop.push("test8");
    searchTop.push("test9");
    searchTop.push("test10");
    searchTop.push("test11");
    searchTop.push("test12");
    searchTop.push("test13");
    searchTop.push("test14");
    searchTop.push("test15");

    let rank = searchTop.slice(0, 10);

    return rank;
}

let counter = {
    idx : 0,
    rank : ''
};

function spanPrint(counter) {
    var rankingObj = document.getElementById('ranking');

    rankingObj.innerHTML = counter.rank[counter.idx];
}

(function() {
    counter['rank'] = getRank();

    setTimeout(function(counter) {
        console.log(counter.rank[counter.idx]);
        spanPrint(counter);
        counter.idx = counter.idx + 1;

        setInterval(function(counter) {
            console.log(counter.rank[counter.idx]);
            spanPrint(counter);

            if( counter.idx > 9 ) {
                counter.idx = 0;
            } else {
                counter.idx = counter.idx + 1;
            }
        }, 5000, counter);

    }, 1, counter)
})();


(function() {
    let toplist = document.getElementById("toplist");
    let menu = toplist.children;
    let menuLength = menu.length;
    let menuList = menu;
    
    for( let i = 0; i < menuLength; i++ ) {
        (
            function(j) {
                let obj = menuList[j];
                if( obj.addEventListener ) {
                    obj.addEventListener(
                        'click',
                        function() {
                            alert(obj.name);
                        },
                        false
                    );
                } else {
                    obj.attachEvent(
                        'onclick',
                        function() {
                            alert(obj.name);
                        },
                        false
                    );
                }
            }
        )(i);
    }
})();
// jQuery의 one을 자바스크립트로 구현
function submit(event) {
    var e = event || window.event;
    let searchForm = document.getElementById("mainform");
    let search_text = document.getElementById("search_text").value;
    if( search_text === '' ) {
        alert("검색어를 입력하세요");
    } else {
        if(e.currentTarget.dataset.triggered) return;
        e.currentTarget.dataset.triggered = true;
        searchForm.submit();
    }
}
// Event Listener - IIFE 사용하여 등록
(function() {    
    let search_top_submit = document.getElementById("search_top");
    if(search_top_submit.addEventListener) {
        search_top_submit.addEventListener('click', submit, false);
    } else {
        search_top_submit.attachEvent('onclick', submit);
    }
}());

(function() {
            
    let accordion = document.getElementsByClassName("accordion");
    for( var i = 0; i < accordion.length; i++ ) {
        // 클로저
        (function(j) {
                var accordion_obj = accordion[j];
                if(accordion_obj.addEventListener) {
                    accordion_obj.addEventListener('click'
                    , function() {
                        this.classList.toggle("active");
                        if( this.classList.contains("active") ) {
                            var toggleList = document.getElementsByClassName("active");
                            if(toggleList.length > 0) {
                                for( var inner = 0; inner < toggleList.length; inner++ ) {
                                    if(toggleList[inner] != this) {
                                        toggleList[inner].classList.remove("active")
                                    }
                                }   
                            }
                        } 
                    }
                    , false);
                } else {
                    accordion_obj.attachEvent('onclick'
                    , function() {
                        this.classList.toggle("active");
                        if( this.classList.contains("active") ) {
                            var toggleList = document.getElementsByClassName("active");
                            if(toggleList.length > 0) {
                                for( var inner = 0; inner < toggleList.length; inner++ ) {
                                    if(toggleList[inner] != this) {
                                        toggleList[inner].classList.remove("active")
                                    }
                                }   
                            }
                        } 
                    });
                }
            }
        )(i);
    }
}());

function moveEvent(e) {
    var selectObj = document.getElementsByClassName("select");
    
    var event = e || window.event;
    console.log(event.target.id);
    if( selectObj.length > 0 ) {
        var obj = selectObj[0];
        if( e.target == obj ) {
    
        } else {
            obj.classList.remove('select');
            e.target.classList.add('select');
        }
    } else {
        e.target.classList.add('select');
    }
    
    // 이동시키기
    if(event.stopPropagation) event.stopPropagation();
    event.cancelBubble = true;
}

(function() {
    let leftMenu = document.getElementsByClassName("item");
    
    let menuArr = new Array();
    let menuLength = leftMenu.length;
    for( let i = 0; i < menuLength; i++ ) {
        let innerLength = leftMenu[i].children.length;
        let inner = leftMenu[i].children;
        for( let j = 0; j < innerLength; j++ ) {
            menuArr.push(inner[j]);
        }
    }
    menuLength = menuArr.length;
    for( let i = 0; i < menuLength; i++ ) {
        let obj = menuArr[i];
        // 
        if( obj.localName === 'a' ) {
            if( obj.addEventListener ) {
                obj.addEventListener(
                    'click', function(event) {
                        moveEvent(event);
                    }, false
                );
                
            } else {
                obj.attachEvent(
                    'onclick', function(event) {
                        moveEvent(event);
                    }, false
                );
            }
        } else {
            continue;
        }
    }
})();