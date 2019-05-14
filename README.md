# JSP 연습
## 기차표 예매(코레일 참조 해서 만듦)
## JSP 만 이용해서 만든 다음, 로직이나 화면은 그대로 두고 스프링 프레임워크 적용(tob_web)
## 여러가지 테스트해볼 목적으로 만듦.
### Maven으로 webapp을 만들 경우, Eclipse의 Tomcat 서버를 시작하는 것이 아닌 Maven의 tomcat 플러그인을 실행한다고 생각
> 선행 작업
<ol>
    <li>tomcat-user의 role 확인 : manager-gui,manager-script</li>
    <li>Maven 폴더 conf/settings.xml에 server 부분 찾아서 tomcat-user의 role이 적용되어 있는 User의 id와 password 적고, 식별할 수 있는 이름 설정</li>
    <li>pom.xml build에 org.apache.tomcat.maven/tomcat7-maven-plugin 플러그인</li>
    <li>해당 플러그인의 configuration에 path는 톰캣 서버에 올라갈 경로를, url에는 http://localhost:[port]/manager/text 작성(manager/text는 고정), server에는 settings.xml에 작성한 식별자명을 입력</li>
    <li>Tomcat Service 실행</li>
</ol>

> 실행
<ul>
    <li>이클립스에서는 Maven Build의 Goal에 tomcat7:deploy를 입력 후 build</li>
    <li>cmd에서는 mvn clean tomcat7:redeploy 수행</li>
</ul>

> 폴더
webapp/style : Style 관련

>> 
1. include
    
    + &lt;jsp:include page="[location]" &gt; 액션 태그(동적 include)
        - 해당 액션문을 포함하는 jsp(부모 jsp)가 class 파일로 컴파일 된 후 html 문서로 생성되는 시점에 page의 파일이 삽입되고, 랜더링됨. 
        - page의 파일로 제어권을 넘겨준 뒤 다시 돌려받음.
        - 표현식 사용 가능
        - 부모 jsp에서 parameter 전달하여 포함 jsp에서 사용할 수 있다(포함 페이지에서는 ).
        - page에 (&lt;%= %&gt;, &lt;% %&gt;) 표현식 또는 스크립트릿 사용 가능
        - 부모 페이지에서 정의한 변수에 자식 페이지(page의 경로)에서는 사용(접근)할 수 없음
        - 포함된 파일이 수정되면 재컴파일된다.
    + &lt;@include file="" %&gt; 지시자(정적 include)
        - 포함한 jsp(부모 jsp)가 컴파일되기 전에 부착된다.
        - 부모 jsp에서 include 지시자를 포함한 그 다음 줄 부터는 include 지시자에 정의한 변수에 접근할 수 있다.
        - 부모 jsp던지, 포함한 jsp던지 각 jsp에서 선언한 변수에 접근할 수 있다.