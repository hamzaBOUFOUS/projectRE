package com.project.re.ressources;

import com.project.re.Dto.DashboardEmp;
import com.project.re.services.DashboardEmpService;
import com.project.re.services.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping(value="/dashboardEmp")
public class DashboardEmpRessource {
    private final DashboardEmpService dashboardEmpService;

    @Autowired
    public DashboardEmpRessource(DashboardEmpService dashboardEmpService) {
        this.dashboardEmpService = dashboardEmpService;
    }

    @PostMapping(path = "/constructDashboard/{id}")
    public DashboardEmp constructDashboardEmp(@PathVariable("id") long id) {
        return dashboardEmpService.constructDashboardEmp(id);
    }
}
