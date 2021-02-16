package lt.vtmc.kindergarten.domain;

import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "queues")
public class Queue {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @Column(unique = true)
    @Temporal(TemporalType.TIMESTAMP)
    private Date openingDate;

    @NotNull
    @Column(unique = true)
    private Date closingDate;

    @Column
    @Enumerated(EnumType.STRING)
    private QueueStatusEnum status;

    @OneToMany(mappedBy = "queue")
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private Set<Application> applications = new HashSet<>();

    public Queue() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getOpeningDate() {
        return openingDate;
    }

    public void setOpeningDate(Date openingDate) {
        this.openingDate = openingDate;
    }

    public Date getClosingDate() {
        return closingDate;
    }

    public void setClosingDate(Date closingDate) {
        this.closingDate = closingDate;
    }

    public QueueStatusEnum getStatus() {
        return status;
    }

    public void setStatus(QueueStatusEnum status) {
        this.status = status;
    }

    public Set<Application> getApplications() {
        return applications;
    }

    public void setApplications(Set<Application> applications) {
        this.applications = applications;
    }
}