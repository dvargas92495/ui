import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import React, { useCallback, useState } from "react";
import Outlined from "./Outlined";

const CheckboxForm = ({
  items,
  onSave,
  buttonText,
}: {
  items: string[];
  onSave: (items: string[]) => void;
  buttonText: string;
}) => {
  const [checkboxes, setCheckboxes] = useState(
    Object.fromEntries(items.map((i) => [i, true]))
  );
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setCheckboxes({
        ...checkboxes,
        [e.target.name]: e.target.checked,
      }),
    [checkboxes, setCheckboxes]
  );
  const onButtonClick = useCallback(
    () => onSave(items.filter((i) => checkboxes[i])),
    [onSave, checkboxes, items]
  );
  return (
    <Outlined>
      <Grid container spacing={1}>
        {items.map((item) => (
          <Grid item xs={4} key={item}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxes[item]}
                  onChange={onChange}
                  name={item}
                  color="primary"
                />
              }
              label={item}
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button onClick={onButtonClick}>{buttonText}</Button>
        </Grid>
      </Grid>
    </Outlined>
  );
};

export default CheckboxForm;
