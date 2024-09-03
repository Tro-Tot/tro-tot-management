import axios from 'axios';

const baseURL = 'https://provinces.open-api.vn/api';

export const vietnamApi = {
  // Get all provinces with nested districts and wards (depth=3)
  getProvinces: async () => {
    try {
      const response = await axios.get(`${baseURL}/`, {
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          depth: 3,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching provinces:', error);
      throw error;
    }
  },

  // Search for provinces based on query
  searchProvinces: async (query: string) => {
    try {
      const response = await axios.get(`${baseURL}/p/search/`, {
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          q: query,
        },
      });
      return response.data;
    } catch (error) {
      console.error(`Error searching provinces for query "${query}":`, error);
      throw error;
    }
  },

  // Get a specific province by its code
  getProvinceByCode: async (code: number, depth: number = 3) => {
    try {
      const response = await axios.get(`${baseURL}/p/${code}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          depth,
        },
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching province with code "${code}":`, error);
      throw error;
    }
  },

  // Get all districts
  getDistricts: async () => {
    try {
      const response = await axios.get(`${baseURL}/d/`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching districts:', error);
      throw error;
    }
  },

  // Search for districts based on query
  searchDistricts: async (query: string, provinceCode?: number) => {
    try {
      const response = await axios.get(`${baseURL}/d/search/`, {
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          q: query,
          p: provinceCode,
        },
      });
      return response.data;
    } catch (error) {
      console.error(`Error searching districts for query "${query}":`, error);
      throw error;
    }
  },

  // Get a specific district by its code
  getDistrictByCode: async (code: number, depth: number = 2) => {
    try {
      const response = await axios.get(`${baseURL}/d/${code}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          depth,
        },
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching district with code "${code}":`, error);
      throw error;
    }
  },

  // Search for wards based on query and filter by district or province code
  searchWards: async (
    query: string,
    districtCode?: number,
    provinceCode?: number
  ) => {
    try {
      const response = await axios.get(`${baseURL}/w/search/`, {
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          q: query,
          d: districtCode,
          p: provinceCode,
        },
      });
      return response.data;
    } catch (error) {
      console.error(`Error searching wards for query "${query}":`, error);
      throw error;
    }
  },

  // Get a specific ward by its code
  getWardByCode: async (code: number) => {
    try {
      const response = await axios.get(`${baseURL}/w/${code}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching ward with code "${code}":`, error);
      throw error;
    }
  },

  // Get the API version information
  getVersion: async () => {
    try {
      const response = await axios.get(`${baseURL}/version`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching API version:', error);
      throw error;
    }
  },
};
