// rank 가져오는 구문 추가 하기(실제로 돌릴때는 ajax로)
function getRank() {
    var searchTop = new Array();

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

    var rank = searchTop.slice(0, 10);

    return rank;
}

var counter = {
    idx : 0,
    rank : ''
};

function spanPrint(counter) {
    var rankingObj = document.getElementById('ranking');
    var htmlString = "<a>[" + (counter.idx + 1) + "]." + counter.rank[counter.idx] + "</a>";
    rankingObj.innerHTML = htmlString;
}

(function() {
    counter['rank'] = getRank();

    setTimeout(function(counter) {
        spanPrint(counter);

        setInterval(function(counter) {
            counter.idx = counter.idx + 1;

            if( counter.idx > counter.rank.length - 1 ) {
                counter.idx = 0;
            } 
            spanPrint(counter);
        }, 5000, counter);

    }, 1, counter)
})();


(function() {
    var toplist = document.getElementById("toplist");
    var menu = toplist.children;
    var menuLength = menu.length;

    var menuList = menu;
    
    for( var i = 0; i < menuLength; i++ ) {
        (
            function(j) {
                var obj = menuList[j];
                if( obj.addEventListener ) {
                    obj.addEventListener(
                        'click',
                        function() {
                            alert(obj.id);
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
    var searchForm = document.getElementById("mainform");
    var search_text = document.getElementById("search_text").value;
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
    var search_top_submit = document.getElementById("search_top");
    if(search_top_submit.addEventListener) {
        search_top_submit.addEventListener('click', submit, false);
    } else {
        search_top_submit.attachEvent('onclick', submit);
    }
}());

(function() {
            
    var accordion = document.getElementsByClassName("accordion");
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
    var leftMenu = document.getElementsByClassName("item");
    
    var menuArr = new Array();
    var menuLength = leftMenu.length;
    for( var i = 0; i < menuLength; i++ ) {
        var innerLength = leftMenu[i].children.length;
        var inner = leftMenu[i].children;
        for( var j = 0; j < innerLength; j++ ) {
            menuArr.push(inner[j]);
        }
    }
    menuLength = menuArr.length;
    for( var i = 0; i < menuLength; i++ ) {
        var obj = menuArr[i];
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

var slideIdx = 0;

function showDivs(idx) {
    var slideImage = document.getElementsByClassName("mySlides");

    var slideLength = slideImage.length;

    if( idx > slideLength ) {
        slideIdx = 1;
    }

    if( idx < 1 ) {
        slideIdx = slideLength;
    }

    for( var imgIdx = 0; imgIdx < slideLength; imgIdx++ ) {
        if(imgIdx == (slideIdx - 1)) {
            slideImage[imgIdx].style.display = "block";
        } else {
            slideImage[imgIdx].style.display = "none";
        }
    }
}

function plusDivs(n) {
    showDivs(slideIdx += n);
}

(function() {
    setTimeout(function() {
        plusDivs(1);
        setInterval(plusDivs, 1000, 1);
    }, 0, 1);
})();