package com.portfolio.store.service.impl;

import com.portfolio.store.dto.ContactRequestDto;
import com.portfolio.store.dto.ProductDto;
import com.portfolio.store.entity.Contact;
import com.portfolio.store.entity.Product;
import com.portfolio.store.repository.ContactRepository;
import com.portfolio.store.repository.ProductRepository;
import com.portfolio.store.service.IContactService;
import com.portfolio.store.service.IProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ContactServiceImpl implements IContactService {

    private final ContactRepository contactRepository;

    @Override
    public boolean saveContact(ContactRequestDto contactRequestDto) {
        try {
            Contact contact = transformToEntity(contactRequestDto);
            contact.setCreatedAt(Instant.now());
            contact.setCreatedBy(contactRequestDto.getName());
            contactRepository.save(contact);
            return true;
        } catch (Exception exception){
            return false;
        }
    }

    private Contact transformToEntity(ContactRequestDto contactRequestDto) {
        Contact contact = new Contact();
        BeanUtils.copyProperties(contactRequestDto,contact);
        return contact;
    }
}
