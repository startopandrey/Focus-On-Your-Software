import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputAdornment,
  LinearProgress,
  OutlinedInput,
  TextField,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { MuiTelInput } from "mui-tel-input";
import Confetti from "react-confetti";
import json2mq from "json2mq";
import styles from "../../../src/styles/question-form.module.scss";
const QuestionForm = ({onClickLastQuestion, setQuestionsForm, questionsForm, formTitle }) => {
  const [value, setValue] = React.useState("");
  const matchesSmall = useMediaQuery(
    json2mq({
      minWidth: 480,
    })
  );
  const handleChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  const [disabledButton, setDisabledButton] = useState(true);
  const [successAnimation, setSuccessAnimation] = useState();

  const activeQuestion = questionsForm.find((el) => el.active === true);
  const activeQuestionIndex = questionsForm.findIndex(
    (el) => el.active === true
  );
  const handleQuestionsChange = (questionId) => {
    console.log(questionId);
    const newArr = questionsForm.map((obj) => {
      if (obj.id == activeQuestion.id) {
        return {
          ...obj,
          questions: obj.questions.map((questionObj) => {
            if (questionObj.id == questionId) {
              return {
                ...questionObj,
                active: true,
              };
            }
            return {
              ...questionObj,
              active: false,
            };
          }),
        };
      }
      return obj;
    });
    setQuestionsForm(newArr);
  };
  const handleQuestionsChangeInput = (questionId, value) => {
    console.log(questionId);
    const newArr = questionsForm.map((obj) => {
      if (obj.id == activeQuestion.id) {
        return {
          ...obj,
          value: value,
        };
      }
      return obj;
    });
    setQuestionsForm(newArr);
  };
  const handleQuestionsChangePhone = (questionId, value) => {
    console.log(questionId);
    const newArr = questionsForm.map((obj) => {
      if (obj.id == activeQuestion.id) {
        return {
          ...obj,
          phone: value,
        };
      }
      return obj;
    });
    setQuestionsForm(newArr);
  };
  const handleQuestionsChangeMany = (questionId) => {
    const newArr = questionsForm.map((obj) => {
      if (obj.id == activeQuestion.id) {
        return {
          ...obj,
          questions: obj.questions.map((questionObj) => {
            if (questionObj.id == questionId) {
              return {
                ...questionObj,
                active: true,
              };
            }
            return questionObj;
          }),
        };
      }
      return obj;
    });

    setQuestionsForm(newArr);
  };

  const handleNextQuestion = () => {
    if (questionsForm[activeQuestionIndex + 1].type == "success") {

        onClickLastQuestion();

      setSuccessAnimation(true);
      setTimeout(() => {
        setSuccessAnimation(false);
      }, 5000);
    }
    const newArr = questionsForm.map((obj, i) => {
      console.log(i);
      if (activeQuestionIndex + 1 == i) {
        return {
          ...obj,
          active: true,
        };
      }
      return {
        ...obj,
        active: false,
      };
    });

    setQuestionsForm(newArr);
  };
  const handleBackQuestion = () => {
    const newArr = questionsForm.map((obj, i) => {
      console.log(i);
      if (activeQuestionIndex - 1 == i) {
        return {
          ...obj,
          active: true,
        };
      }
      return {
        ...obj,
        active: false,
      };
    });

    setQuestionsForm(newArr);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === "best") {
      setHelperText("You got it!");
      setError(false);
    } else if (value === "worst") {
      setHelperText("Sorry, wrong answer!");
      setError(true);
    } else {
      setHelperText("Please select an option.");
      setError(true);
    }
  };
  const validateForm = () => {
    console.log(activeQuestion);
    if (activeQuestion.type == "checkbox") {
      const findActiveCheckbox = activeQuestion.questions.find(
        (el) => el.active == true
      );
      setDisabledButton(Boolean(findActiveCheckbox));
    }
    if (activeQuestion.type == "checkboxPlaceholder") {
      const findActiveCheckbox = activeQuestion.questions.find(
        (el) => el.active == true
      );

      setDisabledButton(
        Boolean(activeQuestion.value) || Boolean(findActiveCheckbox)
      );
    }
    if (activeQuestion.type == "total") {
      setDisabledButton(
        activeQuestion?.phone.length > 4 || activeQuestion?.value.length > 5
      );
    }
    return false;
  };
  useEffect(() => {
    validateForm();
  }, [activeQuestion]);

  return (
  <div className={styles.question_form}>
      {activeQuestion.type != "success" && (
        <h4 className={styles.form_title}>{formTitle}</h4>
      )}
      {activeQuestion.type != "success" && (
        <LinearProgress
          sx={{ height: "6px", my: 2 }}
          variant="determinate"
          value={100 * ((activeQuestionIndex + 1) / (questionsForm.length - 1))}
        />
      )}
      <div className={styles.form_container}>
        {activeQuestion.type != "success" && (
          <h4 className={styles.form_content_title}>{activeQuestion?.title}</h4>
        )}
        <form cclassName={styles.form_content} onSubmit={handleSubmit}>
          {" "}
          {successAnimation && (
            <Confetti
              style={{ left: "-25%" }}
              // duration={1000}
              width={2600}
              height={1019}
            />
          )}
          <FormControl sx={{ width: "100%" }} variant={"standard"}>
            {activeQuestion.type == "checkbox" &&
              questionsForm
                .find((el) => el.active == true)
                ?.questions.map((el) => (
                  <FormControlLabel
                  key={el.text}
                    control={
                      <Checkbox
                        sx={{ transition: " ease-in-out all 0.2s" }}
                        checked={el.active}
                        onChange={() =>
                          activeQuestion.changeMany
                            ? handleQuestionsChangeMany(el.id)
                            : handleQuestionsChange(el.id)
                        }
                        name={el.text}
                      />
                    }
                    label={el.text}
                    sx={{
                      color: el.active ? "#023fda" : "#222",
                      transition: "ease-in-out all 0.2s",
                    }}
                  />
                ))}
            {activeQuestion.type == "checkboxPlaceholder" && (
              <Box>
                <Box
                  sx={
                    !matchesSmall
                      ? { display: "grid", gridTemplateColumns: "1fr" }
                      : { display: "grid", gridTemplateColumns: "1fr 1fr" }
                  }
                >
                  {questionsForm
                    .find((el) => el.active == true)
                    ?.questions.map((el) => (
                      <FormControlLabel
                      key={el.text}
                        control={
                          <Checkbox
                            sx={{ transition: " ease-in-out all 0.2s" }}
                            checked={el.active}
                            onChange={() => handleQuestionsChange(el.id)}
                            name={el.text}
                          />
                        }
                        label={el.text}
                        sx={{
                          borderRadius: 0,
                          color: el.active ? "#023fda" : "#222",
                          transition: "ease-in-out all 0.2s",
                        }}
                      />
                    ))}
                </Box>
                <OutlinedInput
                  id="outlined-adornment-weight"
                  placeholder={activeQuestion?.placeholder}
                  value={activeQuestion?.value}
                  onChange={(value) => {
                    handleQuestionsChangeInput(
                      activeQuestion.id,
                      value.target.value
                    );
                  }}
                  fullWidth
                  sx={{
                    my: 2,
                    borderRadius: 0,
                  }}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
              </Box>
            )}
            {activeQuestion.type == "total" && (
              <Box>
                <MuiTelInput
                  defaultCountry="AT"
                  sx={{ borderRadius: 0 }}
                  fullWidth
                  value={activeQuestion?.phone}
                  onChange={(phone) => {
                    handleQuestionsChangePhone(activeQuestion?.id, phone);
                  }}
                ></MuiTelInput>
                <h4
                  style={{
                    textAlign: "center",
                    marginBottom: 0,
                    marginTop: 10,
                  }}
                >
                  Or
                </h4>
                <OutlinedInput
                  id="outlined-adornment-weight"
                  placeholder={activeQuestion?.placeholder}
                  onChange={(value) => {
                    handleQuestionsChangeInput(
                      activeQuestion.id,
                      value.target.value
                    );
                  }}
                  value={activeQuestion.value}
                  fullWidth
                  sx={{
                    my: 2,
                    borderRadius: 0,
                  }}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
              </Box>
            )}
            {activeQuestion.type == "success" && (
              <Box>
                {/* <MuiTelInput
                  defaultCountry="AU"
                  sx={{ borderRadius: 0 }}
                  fullWidth
                  value={value}
                  onChange={handleChange}
                ></MuiTelInput> */}
                <h4
                  style={{
                    textAlign: "center",

                    marginTop: 100,
                    fontSize: matchesSmall ? "2.5rem" : "1.8rem",
                    fontWeight: 600,
                  }}
                  className={styles.congratulations_text}
                >
                  Congratulations 🎉
                </h4>
                <p
                  style={{
                    textAlign: "center",
                    mt: 1,
                    color: "gray",
                    marginBottom: 70,
                    fontSize: matchesSmall ? "1.2rem" : "1rem",
                    fontWeight: 500,
                  }}
                >
                  You will resive feedback, within 1hour
                </p>
              </Box>
            )}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {" "}
              {activeQuestionIndex != 0 && (
                <IconButton
                  sx={{
                    mt: 1,
                    mr: 1,
                    borderRadius: 0,
                    width: 50,
                    height: 50,
                    p: 1.5,
                    background: "#fff",
                    boxShadow: "0px 8px 12px rgba(200, 200, 200, 0.3)",
                  }}
                  onClick={() => handleBackQuestion()}
                  variant="contained"
                >
                  {" "}
                  <ArrowBackIosNewIcon
                    sx={{ fontWeight: 700, color: "#000" }}
                  ></ArrowBackIosNewIcon>
                </IconButton>
              )}
              {activeQuestion.type != "success" && (
                <Box>
                  <Button
                    sx={{
                      mt: 1,
                      mr: 1,
                      borderRadius: 0,
                      width: 170,
                      boxShadow: "0px 8px 12px rgba(0, 73, 255, 0.3)",
                    }}
                    disabled={!disabledButton}
                    endIcon={
                      <ArrowForwardIosIcon
                        sx={{ fontWeight: 700 }}
                      ></ArrowForwardIosIcon>
                    }
                    onClick={() => {
                      console.log(activeQuestionIndex,questionsForm)
                 
                      handleNextQuestion();
                    }}
                    variant="contained"
                  >
                    Next
                  </Button>
                </Box>
              )}
            </Box>
          </FormControl>
        </form>
      </div>
    </div>
  );
};

export default QuestionForm;
