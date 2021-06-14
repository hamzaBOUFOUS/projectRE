package com.project.re.ressources;

import com.project.re.Dto.Dashboard;
import com.project.re.services.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping(value="/dashboard")
public class DashboardRessource {
    private final DashboardService dashboardService;

    @Autowired
    public DashboardRessource(DashboardService dashboardService) {
        this.dashboardService = dashboardService;
    }

    @GetMapping(path = "/constructDashboard")
    public Dashboard constructDashboard() {
        return dashboardService.constructDashboard();
    }
}
