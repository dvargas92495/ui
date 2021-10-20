import Button from "@mui/material/Button";
import styled from "@mui/material/styles/styled";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import React, { useCallback, useMemo, useState } from "react";
import Outlined from "./Outlined";

const PREFIX = "CheckboxForm";

const classes = {
  container: `${PREFIX}-container`,
  root: `${PREFIX}-root`,
};

const StyledOutlined = styled(Outlined)(({ theme }) => ({
  [`& .${classes.container}`]: {
    padding: theme.spacing(2),
  },

  [`&.${classes.root}`]: {
    marginBottom: theme.spacing(3),
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

  return (
    <StyledOutlined className={classes.root}>
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
          <Button onClick={onButtonClick} variant={"contained"} color="primary">
            {buttonText}
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button onClick={onCheckAll} variant={"contained"} color="secondary">
            Check All
          </Button>
        </Grid>
      </Grid>
    </StyledOutlined>
  );
};

export default CheckboxForm;
