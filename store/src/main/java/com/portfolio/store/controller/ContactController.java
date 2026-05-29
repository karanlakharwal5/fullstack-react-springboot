package com.portfolio.store.controller;

import com.portfolio.store.dto.ContactRequestDto;
import com.portfolio.store.service.IContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/contact")
@RequiredArgsConstructor
//@CrossOrigin(origins = "http://localhost:5173")
//@JsonPropertyOrder({"name","description","price","popularity","imageUrl","createdAt"})
public class ContactController {

    private final IContactService iContactService;

//    We do not need the below block, since @RequiredArgsConstructor will implement this
//    @Autowired
//    public ProductController(IProductService iProductService){
//
//        this.iProductService = iProductService;
//    }

    @PostMapping
    public String saveContact(@RequestBody ContactRequestDto contactRequestDto) {
        boolean isSaved = iContactService.saveContact(contactRequestDto);
        if (isSaved){
            return "Request processed successfully.";
        }
        else {
            return "An error occurred. Please try again or contact DEV team";
        }
    }
}
