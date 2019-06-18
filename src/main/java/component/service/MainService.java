package component.service;

import java.util.concurrent.locks.ReentrantLock;

// Service는 하나만 만들어지는 것이 좋을 듯
// Servlet이 아닌 Service 클래스이니까 하나만
public class MainService {
    private static MainService mainService;

    private MainService() {}

    public static final MainService getInstance() {
        if(mainService == null) {
            ReentrantLock lock = new ReentrantLock();

            lock.lock();

            try {
                mainService = new MainService();
            } finally {
                lock.unlock();
            }
        }
        return mainService;
    }
}