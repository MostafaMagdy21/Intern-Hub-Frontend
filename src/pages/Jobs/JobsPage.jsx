import { Container, Grid } from "@mantine/core";
import { useEffect, useState } from "react";
import classes from "./JobsPage.module.css";
import { Link } from "react-router-dom";
import JobsFilter from "./component/JobsFilter/JobsFilter";
import { HTTP_METHODS, httpRequest } from "../../core/utils/httpRequest.js";
import APP_CONFIG from "../../core/utils/apiConfig.js";

export default function JobsPage() {
  const [filterQuery, setFilterQuery] = useState();
  const [internShip, setInternShip] = useState([]);
  useEffect(() => {
    //  todo: change this endpoint according to the UI requirements and add the query parameters
    httpRequest(
      APP_CONFIG.endpoints.jobs.getJobs,
      HTTP_METHODS.GET,
      {},
      {},
      {
        // size: 10,
        // skip: 0,
        // filterQuery,
      },
    ).then((res) => {
      setInternShip(res.data);
    });
  }, [filterQuery]);

  return (
    <>
      <Container>
        <Grid style={{ margin: "30px" }}>
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <div className={classes.filter}>
              <div>
                <div style={{ textAlign: "center" }}>
                  <p className={classes.filterIcon}>
                    {" "}
                    <i
                      className="fa-solid fa-filter"
                      style={{ color: "#008BDC", paddingRight: "2px" }}
                    ></i>
                    Filter
                  </p>
                </div>
                <JobsFilter setFilterQuery={setFilterQuery} />
              </div>
            </div>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 8 }}>
            {internShip.map((item) => (
              <Link key={item.id} to={""} className={classes.styleIntern}>
                <div>
                  <div className={classes.actively}>
                    <i
                      className="fa-solid fa-arrow-trend-up"
                      style={{ color: "#3ae" }}
                    ></i>
                    <p className={classes.active_hiring}>Actively hiring</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <p className={classes.hint}>{item.hint}</p>
                      <p className={classes.title}>{item.title}</p>
                    </div>
                    <div>
                      <img src={item.img} width={"50px"} height={"50px"} />
                    </div>
                  </div>
                  <div className={classes.country}>
                    <i
                      className="fa-solid fa-location-dot"
                      style={{ color: "#8A8A8A" }}
                    ></i>{" "}
                    {item.country}
                  </div>
                  <div className={classes.info}>
                    <div style={{ margin: "7px 7px 7px 0px " }}>
                      <p className={classes.start}>
                        {" "}
                        <i
                          className="fa-regular fa-circle-play"
                          style={{
                            color: "#8A8A8A",
                            padding: "0px 2px 2px 0px",
                          }}
                        ></i>
                        START DATE
                      </p>
                      <p className={classes.immediately}>Immediately</p>
                    </div>
                    <div style={{ margin: "7px" }}>
                      <p className={classes.start}>
                        {" "}
                        <i
                          className="fa-solid fa-suitcase"
                          style={{
                            color: "#8A8A8A",
                            padding: "0px 2px 2px 0px",
                          }}
                        ></i>
                        Experience
                      </p>
                      <p className={classes.immediately}>{item.experience}</p>
                    </div>
                    <div style={{ margin: "7px" }}>
                      <p className={classes.start}>
                        {" "}
                        <i
                          className="fa-solid fa-money-bill"
                          style={{
                            color: "#8A8A8A",
                            padding: "0px 2px 2px 0px",
                          }}
                        ></i>
                        SALARY
                      </p>
                      <p className={classes.immediately}>
                        ${item.minSalary} - {item.maxSalary} /month
                      </p>
                    </div>
                  </div>

                  <div style={{ display: "flex" }}>
                    <p
                      style={{
                        margin: "5px 10px 5px 0px",
                        backgroundColor: "rgb(241,255,229)",
                        borderRadius: "6px",
                        padding: "4px 7px",
                        fontSize: "13px",
                        color: "rgb(19,128,13)",
                      }}
                    >
                      <i
                        className="fa-regular fa-clock"
                        style={{
                          color: "#8A8A8A",
                          padding: "0px 2px 2px 0px",
                        }}
                      ></i>
                      {item.publication}
                    </p>
                    <p
                      style={{
                        margin: "5px 10px 5px 10px",
                        backgroundColor: "#eee",
                        borderRadius: "6px",
                        padding: "4px 7px",
                        fontSize: "13px",
                        color: "black",
                      }}
                    >
                      Fresher Job
                    </p>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#eee",
                      height: "1px",
                      margin: "10px 5px",
                    }}
                  ></div>
                </div>
                <div style={{ textAlign: "end", margin: "0px 5px" }}>
                  <a
                    href=""
                    style={{
                      display: "inline-block",
                      marginTop: "2px",
                      padding: "5px 7px",
                      textDecoration: "none",
                      border: "1px solid #008BDC",
                      borderRadius: "6px",
                      color: "#008BDC",
                    }}
                  >
                    view details
                  </a>
                </div>
              </Link>
            ))}
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}
