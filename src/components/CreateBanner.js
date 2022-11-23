import { Grid } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonFill from "../utils/ButtonFill";
import ButtonStock from "../utils/ButtonStock";

import banner1 from "../assects/home/Covid Alien.png";
import tick from "../assects/home/Tick Icon_Grey.svg";
import tickActive from "../assects/Tick Icon_Grey.svg";
import banner2 from "../assects/home/Group 182.png";
import banner3 from "../assects/home/Group 183.png";
import SectionHeader from "./SectionHeader";
import PrimaryButton from "../utils/PrimaryButton";
import CustomizedSwitches from "../utils/SwitchC";
import PrimaryButtonF from "../utils/PrimaryButtonF";

function CreateBanner() {
  const [radiobutton, setRadiobutton] = useState("");
  const [uploadRadiobutton, setUploadRadiobutton] = useState("");

  return (
    <>
      <div className="wrapper CreateBanner mt-md-5 pt-responsive">
        <Grid className="my-5 wrapper" container>
          <Grid item xl={6} md={6} xs={12}>
            <div className="banner">
              <h3>
                创建 <br />
                自己的 NFT
              </h3>
              <div className="bannerText">
                <span>
                  使用我们的创建者工具轻松创建您自己的 NFT 或 NFT 收藏
                </span>
              </div>
              <div className="bannerText">
                <span>
                  若只创建一个 NFT，请选择快速创建工具 若创建一个完整的 NFT
                  合集，请选择高级创建工具
                </span>
              </div>

              <div className="buttons  mt-5">
                <span className="tag">艺术家</span>
              </div>
            </div>
          </Grid>
          <Grid item xl={6} md={6} xs={12}>
            <Grid container>
              <Grid item xl={2} xs={0} md={0} sm={0}></Grid>
              <Grid item xl={5} xs={6} md={6} sm={6}>
                <div className=" img">
                  <img className="img-fluid" src={banner2} alt="" />
                </div>
              </Grid>
              <Grid item xl={5} xs={6} md={6} sm={6}>
                <div className="img">
                  <img className="img-fluid" src={banner3} alt="" />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      {/* <div className="itemBanner">
                <p>JPG, PNG, GIF, MP4, MP3 (max 8mb)</p>
              </div> */}

      <div className="bannerBottom createBannerBottom">
        <div className="wrapper">
          {/* creation */}
          <h1 className="p-4">上传 NFT 项目</h1>
          <Grid className="py-5 mb-5 " container>
            <Grid className="p-5" item md={12} lg={6} xs={12}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "95%",
                  height: "100%",
                }}
                className="itemBanner top"
              >
                <span className="getdealtitla">
                  PDF, PPT, PNG, JPG (max 8mb)
                </span>
                <PrimaryButtonF title="添加作品" />
              </div>
            </Grid>

            <Grid className="py-5" item md={12} lg={6} xs={12}>
              <div className="right getbetterRight">
                <input type="text" placeholder="NFT 名称" />
                <textarea type="text" placeholder="NFT 描述 (最多 300 个字)" />
                <input type="text" placeholder="NFT 价格 -- BNB" />
                <input type="text" placeholder="版权" />
                <div className="total mt-5 px-4 pt-2">
                  <span className="totaltitle">服务费</span>
                  <span className="totaltitle">5%</span>
                </div>
                <div
                  className="total mt-4 px-4"
                  onClick={() => setUploadRadiobutton("U立即铸造")}
                >
                  <span className="totaltitle">立即铸造</span>
                  <div className="img">
                    <img
                      src={
                        uploadRadiobutton === "U立即铸造" ? tickActive : tick
                      }
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="total mt-4 px-4"
                  onClick={() => setUploadRadiobutton("U隐藏直到铸造")}
                >
                  <span className="totaltitle">隐藏直到铸造</span>
                  <div className="img">
                    <img
                      src={
                        uploadRadiobutton === "U隐藏直到铸造"
                          ? tickActive
                          : tick
                      }
                      alt=""
                    />
                  </div>
                </div>
                <p className="getbetterbutton px-2  py-3">创建单个 NFT</p>
              </div>
            </Grid>
          </Grid>
          {/* creation */}
        </div>
        <div className="wrapper">
          {/* creation */}

          {/* form */}
          <h1 className="px-4 mt-5 pt-5">高级创建工具</h1>
          <Grid className="pt-5 mt-5 " container>
            <Grid className="p-4" item md={6} xs={12}>
              <div className="right">
                <p>合集名称</p>
                <input type="text" placeholder="合集名称" />
                <input type="text" placeholder="NFT 项目描述（最多 300 个字)" />
                <input type="text" placeholder="总数量" />
                <input type="text" placeholder="版权" />

              </div>
            </Grid>
            <Grid className="p-4" item md={6} xs={12}>
              <div className="right pt-4">
                <input type="text" placeholder="NFT 名称" />
                <input type="text" placeholder="列印价格 - BNB" />

                {/* radio buttons  */}
                <div
                  style={{ alignItems: "end" }}
                  onClick={() => setRadiobutton("立即铸造")}
                  className="form-check my-2 d-flex justify-content-between "
                >
                  <span className="totaltitle">立即铸造</span>
                  <div className="img">
                    <img
                      src={radiobutton === "立即铸造" ? tickActive : tick}
                      alt=""
                    />
                  </div>
                </div>
                <div
                  style={{ alignItems: "end" }}
                  onClick={() => setRadiobutton("买方铸造")}
                  className="form-check my-2 d-flex justify-content-between "
                >
                  <span className="totaltitle">买方铸造</span>
                  <div className="img">
                    <img
                      src={radiobutton === "买方铸造" ? tickActive : tick}
                      alt=""
                    />
                  </div>
                </div>
                <div
                  style={{ alignItems: "end" }}
                  onClick={() => setRadiobutton("隐藏直到铸造")}
                  className="form-check my-2 d-flex justify-content-between "
                >
                  <span className="totaltitle">隐藏直到铸造</span>
                  <div className="img">
                    <img
                      src={radiobutton === "隐藏直到铸造" ? tickActive : tick}
                      alt=""
                    />
                  </div>
                </div>
                {/* radio buttons  */}
              </div>
            </Grid>
          </Grid>
          {/* form */}

          {/* Grid item */}
          <Grid className="pt-5 mt-5 " container>
            <Grid className="p-4" item xl={3} lg={4} md={6} sm={12} xs={12}>
              <div className="itemBanner carditemChange">
                <p className="itemTitle">稀有等级 1</p>
                <PrimaryButtonF title="添加文件" />
              </div>
            </Grid>
            <Grid className="p-4" item xl={3} lg={4} md={6} sm={12} xs={12}>
              <div className="itemBanner carditemChange">
                <p className="itemTitle">稀有等级 1</p>
                <PrimaryButtonF title="添加文件" />
              </div>
            </Grid>
            <Grid className="p-4" item xl={3} lg={4} md={6} sm={12} xs={12}>
              <div className="itemBanner  carditemChange">
                <p className="itemTitle">稀有等级 2</p>
                <PrimaryButtonF title="添加文件" />
              </div>
            </Grid>
            <Grid className="p-4" item xl={3} lg={4} md={6} sm={12} xs={12}>
              <div className="itemBanner carditemChange">
                <p className="itemTitle">稀有等级 1</p>
                <PrimaryButtonF title="添加文件" />
              </div>
            </Grid>
            <Grid className="p-4" item xl={3} lg={4} md={6} sm={12} xs={12}>
              <div className="itemBanner carditemChange">
                <p className="itemTitle">稀有等级 1</p>
                <PrimaryButtonF title="添加文件" />
              </div>
            </Grid>
            <Grid className="p-4" item xl={3} lg={4} md={6} sm={12} xs={12}>
              <div className="itemBanner  carditemChange">
                <p className="itemTitle">稀有等级 2</p>
                <PrimaryButtonF title="添加文件" />
              </div>
            </Grid>
            <Grid className="p-4" item xl={3} lg={4} md={6} sm={12} xs={12}>
              <div className="itemBanner carditemChange">
                <p className="itemTitle">稀有等级 3</p>
                <PrimaryButtonF title="添加文件" />
              </div>
            </Grid>
            <Grid className="p-4" item xl={3} lg={4} md={6} sm={12} xs={12}>
              <div className="itemBanner carditemChange">
                <p className="itemTitle">稀有等级 3</p>
                <PrimaryButtonF title="添加文件" />
              </div>
            </Grid>
          </Grid>
          {/* Grid item */}

          {/* options */}
          <div className="option px-4 pt-5 mt-5">
            <h1 className="">高级创建工具</h1>
            <p style={{ background: "transparent" }} className="my-3">
              FRAME 将在此项目的详细信息页面上包含指向此 URL
              的链接，以便用户可以单击以了解更多信息
              欢迎链接到您自己的网页以了解更多详情
            </p>
            <input type="text" placeholder="https://yoursiteio/item/123" />

            {/* second */}
            <div
              className="mt-5 pt-5 d-flex justify-content-between "
              style={{ alignItems: "center" }}
            >
              <h1 className="">高级创建工具</h1>
              <CustomizedSwitches />
            </div>
            <p style={{ background: "transparent" }} className="my-3">
              FRAME 将在此项目的详细信息页面上包含指向此 URL
              的链接，以便用户可以单击以了解更多信息
              欢迎链接到您自己的网页以了解更多详情
            </p>

            {/* third */}
            <div
              className="mt-5 pt-5 d-flex justify-content-between "
              style={{ alignItems: "center" }}
            >
              <h1>高级创建工具</h1>
              <CustomizedSwitches />
            </div>
            <p style={{ background: "transparent" }} className="my-3">
              FRAME 将在此项目的详细信息页面上包含指向此 URL
              的链接，以便用户可以单击以了解更多信息
              欢迎链接到您自己的网页以了解更多详情
            </p>

            {/* fourth */}
            <h1 className="mt-5 pt-5">供应</h1>
            <p style={{ background: "transparent" }} className="my-3">
              副本数可铸造，无需任何矿工费！ 一以上的数量即将推出
            </p>
            <p className="mt-5 px-3 ">1</p>

            {/* five */}
            <h1 className="mt-5 pt-5">供应</h1>
            <p className="mt-5 px-3">Binance Smart Chain</p>

            {/* six */}
            <div className="d-flex ">
              <h1 className="mt-5 pt-5">冻结元数据</h1>
            </div>
            <p style={{ background: "transparent" }} className="my-4">
              允许您永久锁定并存储此项目的所有内容，并将其存储在分散的文件存储中
            </p>
            <p className="px-3">要冻结您的元数据，您必须先创建您的项目</p>
            <PrimaryButton title="添加文件" />
          </div>
          {/* options */}
        </div>
      </div>
    </>
  );
}

export default CreateBanner;
