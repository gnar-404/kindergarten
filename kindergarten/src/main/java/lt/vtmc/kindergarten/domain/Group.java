package lt.vtmc.kindergarten.domain;

import org.hibernate.annotations.Cascade;

import javax.persistence.*;

@Entity
@Table(name = "groups")
public class Group {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private int childrenCount;

    @Column
    private int occupiedSpace;

    @ManyToOne
    @JoinColumn(name = "kindergarten_id")
    private Kindergarten kindergarten;

    @ManyToOne
    @JoinColumn(name = "ageRange_id")
    @Cascade(org.hibernate.annotations.CascadeType.MERGE)
    private AgeRange ageRange;

    public Group() {
    }

    public int getOccupiedSpace() {
        return occupiedSpace;
    }

    public void setOccupiedSpace(int occupiedSpace) {
        this.occupiedSpace = occupiedSpace;
    }

    public Kindergarten getKindergarten() {
        return kindergarten;
    }

    public void setKindergartenId(Kindergarten kindergarten) {
        kindergarten.addGroup(this);
        this.kindergarten = kindergarten;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getChildrenCount() {
        return childrenCount;
    }

    public void setChildrenCount(int childrenCount) {
        this.childrenCount = childrenCount;
    }

    public void setKindergarten(Kindergarten kindergarten) {
        this.kindergarten = kindergarten;
    }

    public AgeRange getAgeRange() {
        return ageRange;
    }

    public void setAgeRange(AgeRange ageRange) {
        this.ageRange = ageRange;
    }

}
