import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import addBanner from '@/assets/banner.png'
import { useSearchParams } from 'next/navigation';
// import { StepsExperience, StepsFresher } from '@/constants';
// import Profile from './stepper/profile';
// import Status from './stepper/status';
// import Education from './stepper/education';
// import Experience from './stepper/experience';
// import LastStep from './stepper/lastStep';
import axios from 'axios';
import Booking1 from '../booking1/page';
import Tests from '../booking2/page';
import TestTime from '../booking3/page';
import PatientAdd from '../booking4/page';
import Summary from '../summary/page';
import './bookStyle.css'


const StepperSwitch = ({ stepActive, setStepActive, setProfile, profile, selectedTests, selectedAddress, setSelectedTests, experience, salary }: any) => {

    const searchParams = useSearchParams();
    // const userType = searchParams.get('type');
    // const userTheme = searchParams.get('theme');
    // const menuItems = userType === 'experience' ? StepsExperience : StepsFresher;

    const [updateData, setUpdateData] = useState({})
    const [update, setUpdate] = useState(false)

    // const getUserDetail = async () => {
    //     const userId = sessionStorage.getItem('userId');
    //     try {
    //         const response = await axios.get(`/api/cv-create/${userId}`);
    //         const res = response.data.data.result;
    //         return res;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(() => {
    //     getUserDetail().then((data: any) => {
    //         setUpdateData(data)
    //         if( data?.userProfile?.hasOwnProperty('isFresher')){
    //             setUpdate(true)
    //         }
    //     })
    // }
    // ,[]);

    
    

    return (
        <div className="col-span-1 bg-white flex flex-col items-center justify-center rounded-lg" style={{padding : '0 24px 24px 24px'}}>
            { 
            // !update ?
                (() => {
                    switch (stepActive) {
                        case 0:
                            return <Tests
                                profile={profile}
                                setProfile={setProfile}
                                // cities={cities}
                                setStepActive={setStepActive}
                                selectedTests={selectedTests}
                    selectedAddress={selectedAddress}
                                // menuItems={menuItems}
                                // updateData={updateData}
                                // update={update}
                            />;
                        case 1:
                            return <TestTime
                                profile={profile}
                                setProfile={setProfile}
                                setStepActive={setStepActive}
                                selectedTests={selectedTests}
                    selectedAddress={selectedAddress}
                                // cities={cities}
                                // education={education}
                                // updateData={updateData}
                                // update={update}
                            />
                            // (
                                // menuItems === StepsExperience ? 
                                //     <Status
                                //         profile={profile}
                                //         setProfile={setProfile}
                                //         setStepActive={setStepActive}
                                //         cities={cities}
                                //         salary={salary}
                                //         updateData={updateData}
                                //         update={update}
                                //     />
                                //     :
                            // );
                        // case 2:
                        //     return (
                        //         menuItems === StepsExperience ?
                        //             <Experience
                        //                 profile={profile}
                        //                 setProfile={setProfile}
                        //                 setStepActive={setStepActive}
                        //                 experience={experience}
                        //                 category={category}
                        //                 updateData={updateData}
                        //                 update={update}
                        //             />
                        //             :
                        //             <LastStep
                        //                 profile={profile}
                        //                 setProfile={setProfile}
                        //                 setStepActive={setStepActive}
                        //                 menuItems={menuItems}
                        //                 cities={cities}
                        //                 updateData={updateData}
                        //                 update={update}
                        //             />
                        //     );
                        case 2:
                            return (
                                <PatientAdd
                                    profile={profile}
                                    setProfile={setProfile}
                                    setStepActive={setStepActive}
                                    selectedTests={selectedTests}
                    selectedAddress={selectedAddress}
                                    // menuItems={menuItems}
                                    // cities={cities}
                                    // updateData={updateData}
                                    // update={update}
                                />
                            );
                            case 3:
                                return (
                                    <Summary
                                        profile={profile}
                                        setProfile={setProfile}
                                        setStepActive={setStepActive}
                                        selectedTests={selectedTests}
                    selectedAddress={selectedAddress}
                    setSelectedTests={setSelectedTests}
                                        // menuItems={menuItems}
                                        // cities={cities}
                                        // updateData={updateData}
                                        // update={update}
                                    />
                            );

                        default:
                            return <p>No option selected</p>;
                    }
                })()
                //   :

                // (() => {
                //     switch (stepActive) {
                //         case 0:
                //             return <Profile
                //                 profile={profile}
                //                 setProfile={setProfile}
                //                 cities={cities}
                //                 setStepActive={setStepActive}
                //                 menuItems={menuItems}
                //                 updateData={updateData}
                //                 update={update}
                //             />;
                //         case 1:
                //             return (
                //                 updateUserIsFresher ?
                //                     <Status
                //                         profile={profile}
                //                         setProfile={setProfile}
                //                         setStepActive={setStepActive}
                //                         cities={cities}
                //                         salary={salary}
                //                         updateData={updateData}
                //                         update={update}
                //                     />
                //                     :
                //                     <Education
                //                         profile={profile}
                //                         setProfile={setProfile}
                //                         setStepActive={setStepActive}
                //                         cities={cities}
                //                         education={education}
                //                         updateData={updateData}
                //                         update={update}
                //                     />
                //             );
                //         case 2:
                //             return (
                //                 !updateUserIsFresher ?
                //                     <Experience
                //                         profile={profile}
                //                         setProfile={setProfile}
                //                         setStepActive={setStepActive}
                //                         experience={experience}
                //                         category={category}
                //                         updateData={updateData}
                //                         update={update}
                //                     />
                //                     :
                //                     <LastStep
                //                         profile={profile}
                //                         setProfile={setProfile}
                //                         setStepActive={setStepActive}
                //                         menuItems={menuItems}
                //                         cities={cities}
                //                         updateData={updateData}
                //                         update={update}
                //                     />
                //             );
                //         case 3:
                //             return (
                //                 <LastStep
                //                     profile={profile}
                //                     setProfile={setProfile}
                //                     setStepActive={setStepActive}
                //                     menuItems={menuItems}
                //                     cities={cities}
                //                     updateData={updateData}
                //                     update={update}
                //                 />
                //             );

                //         default:
                //             return <p>No option selected</p>;
                //     }
                // })()
            }
        </div>
    );
}

export default StepperSwitch;
