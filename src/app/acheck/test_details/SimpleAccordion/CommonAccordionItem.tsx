//@ts-nocheck
import { ChevronDown } from "react-feather";
import { AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";

const CommonAccordionItem = ({ item }) => {
  return (
    <AccordionItem className={item.accordionItemClass}>
      <AccordionHeader targetId={item.id} className={item.accordionHeaderClass}>
        {item.iconWithTitle && item.iconWithTitle}
        {/* <span className={item.spanClass}> */}
        <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: 0 }}>
        {/* <span style={{ display: "block", width: 195, textAlign: "left" }}>{item.accordionHeading}</span> */}
        <span style={{ display: "block", width: 195, textAlign: "left" }}>{item.test_name}</span>
        {/* <span style={{ display: "block", textAlign: "right" }}>:</span> */}
        <span style={{ display: "block", width: 95, textAlign: "", color: "", opacity: "0.9", fontWeight: 600 }}><span style={{marginRight : '4px'}}><i className='fa fa-rupee'></i></span>{item.price}.00</span>
        <ChevronDown className={`svg-color ${item.spanClass}`} />
      </div>
        {/* {item.icon &&  */}
        {/* } */}
          {/* {item.accordionHeading} */}
          {/* </span> */}
      </AccordionHeader>
      <AccordionBody accordionId={item.id}>
        {/* {item.bodyText} */}
        <div style={{borderBottomStyle:'' , }}>
                        <div>
                            <p style={{fontWeight:'', paddingBottom: '8px', margin : '0'}}>Normal Levels</p>
                            {/* <h2>Fasting <span style={{fontSize:'12px', paddingBottom : '24px'}}>(mg/dL)</span></h2> */}
                {/* <img style={{ height: '100%', margin : '0'}} className="img-fluid table-avtar" src={`${ImagePath}/VectorProfile.png`} alt="user image" /> */}
                <div style={{display :'flex' , gap : 12 , paddingBottom : '12px'}}>
                <div style={{display :'flex' , gap : 8 , alignItems : 'center'}}>
                <i className='fa fa-male' style={{ marginLeft: '' , padding :0 , fontSize : '28px' , color: 'rgba(101, 196, 102, 1)',}}></i>
                <p style={{color: 'rgba(101, 196, 102, 1)'}}>{item.level.normallevel_male}</p>
                </div>
                <div style={{display :'flex' , gap : 8, alignItems : 'center'}}>
                <i className='fa fa-female' style={{ marginLeft: '' , padding :0 , fontSize : '28px' , color: 'rgba(101, 196, 102, 1)',}}></i>
                <p style={{color: 'rgba(101, 196, 102, 1)'}}>{item.level.normallevel_female}</p>

                </div>
                </div>
                        </div>

                        <div>

                            <table style={{ width: '100%' }}>
                                <tr style={{paddingBottom : '16px'}}>
                                    <td></td>
                                    <td></td>
                                    <td style={{fontSize : '12px'}}>{item.level.levels[0]}</td>
                                    <td style={{fontSize : '12px'}}>{item.level.levels[1]}</td>
                                    <td style={{fontSize : '12px'}}>{item.level.levels[2]}</td>


                                </tr>
                                <tr style={{textAlign:'center'}}>
                                    <th>V. Low</th>
                                    <th>Low</th>
                                    <th> Normal</th>
                                    <th>Elevated</th>
                                    <th>High</th>


                                </tr>
                                <tr style={{paddingBottom : '24px'}}>
                                    <th style={{background: '#E36D66', width: '20%' ,height:'30px',borderBottomLeftRadius:'25px',borderTopLeftRadius:'25px'}}></th>
                                    <th style={{background: '#E3B866' , width: '20%' ,}}> </th>
                                    <th style={{background: '#53A735', width: '20%' ,}}> </th>
                                    <th  style={{background: '#E3B866', width: '20%' ,}}></th>
                                    <th style={{background: '#E36D66', width: '20%' ,borderBottomRightRadius:'25px',borderTopRightRadius:'25px'}}></th>
                                </tr>

                            </table>
                        </div>
                        {/* <div style={{ width: '100%', display: 'flex' }}>
                            <div className="bar-start" style={{ background: '#E36D66', width: '20%', }}></div>
                            <div style={{ background: '#E3B866', width: '20%',height:'30px' }}></div>
                            <div style={{ background: '#53A735', width: '20%' }}></div>
                            <div style={{ background: '#E3B866', width: '20%' }}></div>
                            <div  style={{ background: '#E36D66', width: '20%' }}></div>




                        </div> */}
                        
                    </div>
        </AccordionBody>
    </AccordionItem>
  );
};

export default CommonAccordionItem;
