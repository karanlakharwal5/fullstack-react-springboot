package com.portfolio.store.service;

import com.portfolio.store.dto.ContactRequestDto;
import com.portfolio.store.dto.ProductDto;

import java.util.List;

public interface IContactService {

    boolean saveContact(ContactRequestDto contactRequestDto);
}
