# JSP 연습
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
    <li>cmd에서는 mvn clean tomcat7:deploy 수행</li>
</ul>