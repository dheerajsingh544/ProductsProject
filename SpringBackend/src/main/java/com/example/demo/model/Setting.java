package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="setting")
@AllArgsConstructor
@Data
@NoArgsConstructor
public class Setting {
    @Id
    private Integer id;
    private Boolean allowCreate;
    private Boolean allowEdit;
    private Boolean allowProductSearch;
    private Boolean allowDelete;
}
