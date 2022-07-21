import axios from 'axios';
import { baseUrl } from '../views/config.js/baseUrl';
const apiURL = baseUrl;

export const getHospitalCountService = async (data) => {
  try {
    console.log('Inside login service data = ', data);
    let URL = apiURL + '/admin/hospitalCount';
    console.log('API URL endpoint = ', URL);
    let config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    let res = await axios.get(URL, config);
    const finalResponse = { success: true, data: res.data };
    return finalResponse;
  } catch (e) {
    return {
      success: false,
      data: {},
      message: e,
    };
  }
};
export const getHospitalBedService = async (data) => {
  try {
    console.log('Inside login service data = ', data);
    let URL = apiURL + '/admin/totalBeds';
    console.log('API URL endpoint = ', URL);
    let config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    let res = await axios.get(URL, config);
    const finalResponse = { success: true, data: res.data };
    return finalResponse;
  } catch (e) {
    return {
      success: false,
      data: {},
      message: e,
    };
  }
};
export const getHospitalPatientService = async (data) => {
  try {
    console.log('Inside login service data = ', data);
    let URL = apiURL + '/admin/totalPatients';
    console.log('API URL endpoint = ', URL);
    let config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    let res = await axios.get(URL, config);
    const finalResponse = { success: true, data: res.data };
    return finalResponse;
  } catch (e) {
    return {
      success: false,
      data: {},
      message: e,
    };
  }
};
export const getHospitalEarningService = async (data) => {
  try {
    console.log('Inside login service data = ', data);
    let URL = apiURL + '/admin/totalEarning';
    console.log('API URL endpoint = ', URL);
    let config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    let res = await axios.get(URL, config);
    const finalResponse = { success: true, data: res.data };
    return finalResponse;
  } catch (e) {
    return {
      success: false,
      data: {},
      message: e,
    };
  }
};
export const getHospitalDetailService = async (data) => {
  try {
    console.log('Inside login service data = ', data);
    let URL = apiURL + '/admin/hospitalDetails/' + data;
    console.log('API URL endpoint = ', URL);
    let config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    let res = await axios.get(URL, config);
    const finalResponse = { success: true, data: res.data };
    return finalResponse;
  } catch (e) {
    return {
      success: false,
      data: {},
      message: e,
    };
  }
};
