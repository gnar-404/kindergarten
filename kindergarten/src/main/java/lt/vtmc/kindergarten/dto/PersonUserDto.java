package lt.vtmc.kindergarten.dto;

import org.hibernate.validator.constraints.Length;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

public class PersonUserDto extends PersonDto {

    @NotNull
    @Length(min=8, max=30)
    private String username;

    public PersonUserDto() {
    }

    public PersonUserDto(@Valid PersonDto person, String username) {
        super(person);
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
