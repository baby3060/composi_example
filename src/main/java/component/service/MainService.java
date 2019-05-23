package component.service;

import component.model.*;
import component.repository.*;

import java.util.List;
import java.util.concurrent.locks.ReentrantLock;

import component.repository.*;

// Service는 하나만 만들어지는 것이 좋을 듯
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