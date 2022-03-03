import { combineReducers } from "redux";

import { Addpatient } from './Add Patient';
import { Addbed } from './AddbedReducer';
import { Adddepartment } from './AdddepartmentReducer';
import { Adddoctor } from './AddDoctorReducer';
import { Addpatient } from './Add Patient';

export default combineReducers({
    Addpatientlist: Addpatient,
    Addbedlist: Addbed,
    Adddepartmentlist: Adddepartment,
    Adddoctorlist: Adddoctor,
    Addpatientlist: Addpatient


});

