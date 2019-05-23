package component.controller;

import java.util.List;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import component.service.MainService;

@WebServlet("/main")
public class MainController extends HttpServlet{
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
        String cmd = req.getParameter("cmd");
        String url = "";

        if( cmd == null ) { cmd = ""; }

        if( cmd.equals("") ) {
            url = "/WEB-INF/views/main/main.jsp";
            req.setAttribute("notice1", "");
            req.setAttribute("notice2", "");
        } else if(cmd.equals("search")) {
            
        }

        RequestDispatcher dispatcher = req.getRequestDispatcher(url);

        return dispatcher;
    } 

}