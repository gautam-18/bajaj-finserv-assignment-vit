import { Request, Response } from "express";
import { BfhlRequest, BfhlResponse } from "../types";
import { processData } from "../utils/dataProcessor";

const USER_ID = "gautam_18";
const EMAIL = "gautam.arora2022a@vitstudent.ac.in";
const ROLL_NUMBER = "22BDS0010";

export const handleBfhlPost = (req: Request, res: Response): void => {
  try {
    const { data }: BfhlRequest = req.body;

    if (!data || !Array.isArray(data)) {
      res.status(400).json({
        is_success: false,
        error: "Invalid input: data must be an array",
      });
      return;
    }

    const processedData = processData(data);

    const response: BfhlResponse = {
      is_success: true,
      user_id: USER_ID,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers: processedData.oddNumbers,
      even_numbers: processedData.evenNumbers,
      alphabets: processedData.alphabets,
      special_characters: processedData.specialCharacters,
      sum: processedData.sum.toString(),
      concat_string: processedData.concatString,
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      is_success: false,
      error: "Internal server error",
    });
  }
};
