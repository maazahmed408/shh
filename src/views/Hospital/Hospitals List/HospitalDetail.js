import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTimes } from '@fortawesome/free-solid-svg-icons';
import Carousel from '../../../components/Carousel';
import { get } from 'lodash';

import {
  CCard,
  CCardHeader,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from '@coreui/react';

const HospitalDetail = ({ setIsVisible, hospitalDetailsData }) => {
  const [imageList, setImageList] = useState([]);
  const { bedDetails } = hospitalDetailsData;
  let hospitalName = get(
    hospitalDetailsData,
    'hospitalDetails.hospitalName',
    'No Name',
  );
  let beds = get(hospitalDetailsData, 'bedDetails.beds', []);
  let imageUrl = get(hospitalDetailsData, 'hospitalImages.imageUrl', []);

  useEffect(() => {
    setImageList([]);
  }, [hospitalDetailsData]);

  const handleImageList = (type, name) => {
    if (type === 'hospital') {
      setImageList(imageUrl);
    } else {
      const output = beds.filter((bed) => bed.bedName === name);
      setImageList(output[0].bedImages);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row clearfix">
        <div className="col-lg-12 col-md-12 col-sm-12 ">
          <div className="card">
            <div className="header">
              <h2>Hospital Detail</h2>
              <FontAwesomeIcon
                icon={faTimes}
                style={{ marginRight: '12px', cursor: 'pointer' }}
                onClick={() => setIsVisible(false)}
              />
            </div>
            <div className="body">
              <CCard>
                <CCardHeader component="h5">{hospitalName}</CCardHeader>
                <CCardBody>
                  <CCardTitle>
                    {`Types Of Beds : ${bedDetails?.beds?.length || 0}`}
                  </CCardTitle>
                  <div
                    style={{ display: 'flex', gap: '10px', align: 'center' }}
                  >
                    {/* <CCardTitle>Bed Types</CCardTitle> */}
                    {bedDetails &&
                      bedDetails?.beds?.map((bedType, index) => (
                        <CButton
                          key={index}
                          onClick={() =>
                            handleImageList('bed', bedType.bedName)
                          }
                        >
                          {bedType.bedName}
                        </CButton>
                      ))}
                  </div>
                  {bedDetails?.beds && (
                    <CCardText style={{ color: 'grey' }}>
                      Click on bed name to view images
                    </CCardText>
                  )}
                  <CButton
                    onClick={() => {
                      handleImageList('hospital', '');
                    }}
                  >
                    {imageUrl.length !== 0
                      ? 'Click To View Hospital Images'
                      : 'No Image To View'}
                  </CButton>
                </CCardBody>
              </CCard>
              <div>{imageList && <Carousel images={imageList} />}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDetail;
