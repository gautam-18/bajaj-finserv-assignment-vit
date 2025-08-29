export interface BfhlRequest {
  data: string[];
}

export interface BfhlResponse {
  is_success: boolean;
  user_id: string;
  email: string;
  roll_number: string;
  odd_numbers: string[];
  even_numbers: string[];
  alphabets: string[];
  special_characters: string[];
  sum: string;
  concat_string: string;
}

export interface ProcessedData {
  oddNumbers: string[];
  evenNumbers: string[];
  alphabets: string[];
  specialCharacters: string[];
  sum: number;
  concatString: string;
}
