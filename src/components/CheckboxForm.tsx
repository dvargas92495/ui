import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React, { useCallback, useMemo, useState } from "react";
import Outlined from "./Outlined";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(1),
  },
}));

const CheckboxForm = ({
  items,
  onSave,
  buttonText,
}: {
  items: string[];
  onSave: (items: string[]) => void;
  buttonText: string;
}) => {
  const initialValue = useMemo(
    () => Object.fromEntries(items.map((i) => [i, true])),
    [items]
  );
  const [checkboxes, setCheckboxes] = useState(initialValue);
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
  const onCheckAll = useCallback(() => setCheckboxes(initialValue), [
    setCheckboxes,
  ]);
  const classes = useStyles();
  return (
    <Outlined>
      <Grid container spacing={1} className={classes.container}>
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
        <Grid item xs={6}>
          <Button onClick={onButtonClick} variant={"contained"}>
            {buttonText}
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button onClick={onCheckAll} variant={"contained"} color="secondary">
            Check All
          </Button>
        </Grid>
      </Grid>
    </Outlined>
  );
};

export default CheckboxForm;
