package common.filter;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class LoginChecker implements Filter {
    public void init(FilterConfig fConfig) throws ServletException {
        
    }

    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest servletRequest = (HttpServletRequest)request;

        HttpSession session = servletRequest.getSession();
        
        boolean login = false;

        if(session != null) {
            if( session.getAttribute("LOGIN_USER") != null ) {
                login = true;
            }
        }

        if( login ) {
            chain.doFilter(request, response);
        } else {
            HttpServletResponse servletResponse = (HttpServletResponse)response;

            // 메세지 출력 후 redirectUrl으로 이동시킴
            String confirm_url = "/webapp/views/confirm.jsp";

            servletRequest.setAttribute("redirectUrl", "/webapp/views/login/login.jsp");
            servletRequest.setAttribute("msg", "해당 서비스는 로그인 한 유저만이 접근할 수 있습니다.");
            RequestDispatcher dispatcher = servletRequest.getRequestDispatcher(confirm_url);
            dispatcher.forward(servletRequest, servletResponse);
        }
    }

    public void destroy() {}
}