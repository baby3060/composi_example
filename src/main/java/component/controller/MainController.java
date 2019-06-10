package component.controller;

import java.io.IOException;
import java.util.Optional;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import component.service.*;

@WebServlet("/main")
public class MainController extends HttpServlet {
    private final String URL_PREFIX = "/WEB-INF/views/main/";

    private MainService mainService;

    @Override
    public void init() throws ServletException {
        mainService = MainService.getInstance();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        RequestDispatcher dispatcher = process(req, resp);

        dispatcher.forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        RequestDispatcher dispatcher = process(req, resp);
        
        dispatcher.forward(req, resp);
    }

    private RequestDispatcher process(HttpServletRequest req, HttpServletResponse resp) {
        String urlSuffix = ".jsp";

        String cmd = req.getParameter("cmd");
        String url = "";

        HttpSession session = req.getSession();

        if( cmd == null ) { cmd = ""; }

        // index.jsp에서 redirect 되었을 경우
        if( cmd.equals("") ) {
            Optional<String> loginOpt = Optional.ofNullable((String)session.getAttribute("login_id"));

            // Optional을 이용해서 세션 ID가 Null일 경우 공백으로
            String loginId = loginOpt.orElse("guest");

            req.setAttribute("loginId", loginId);

            url = "main";
        // 상단 조회 버튼 눌렀을 경우
        } else if(cmd.equals("search")) {

        }

        RequestDispatcher dispatcher = this.getServletConfig().getServletContext().getRequestDispatcher(URL_PREFIX + url + urlSuffix);

        return dispatcher;
    }

}