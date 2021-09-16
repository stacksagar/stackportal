import {
  ArrowNarrowDownIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/solid";
import React, { ElementRef, useEffect, useRef, useState } from "react";
import all_devices, { all_devices_types } from "src/data/all_device_sizes";
import ResponsiveViewName from "./ResponsiveViewName";
import ResponsiveDisplay from "./ResponsiveDisplay";
import ScaleSelector from "./ScaleSelector";
import { RotateIcon } from "public/svgs/SvgCode";

export default function ResponsiveViewer({ preview }) {
  const selectDeviceRef = useRef<ElementRef<"span">>();
  const [width, setWidth] = useState<string | number>(900);
  const [height, setHeight] = useState<string | number>(600);
  const [selectedModel, setSelectedModel] = useState<string>("Default");
  const [allDevices, setAllDevices] = useState<all_devices_types>();
  const [openDevices, setOpenDevices] = useState(false);
  const [rotate, setRotate] = useState(false);

  const [selectedScale, setSelectedScale] = useState("50%");

  const widthChangeHandler = (e) => {
    const value = e.target.value;
    if (value.length < 5) {
      setWidth(value);
      setSelectedModel("Custom");
      selectDeviceRef.current.innerText = "Select Device";
    }
  };

  const heightChangeHandler = (e) => {
    const value = e.target.value;
    // if (parseInt(value.slice(value.length - 1))) {
    if (value.length < 5) {
      setHeight(value);
      setSelectedModel("Custom");
      selectDeviceRef.current.innerText = "Select Device";
    }
    // }
  };

  useEffect(() => {
    setAllDevices(all_devices);
  }, []);

  const modelClickHandler = (width, height, deviceName) => {
    setWidth(width);
    setHeight(height);
    setSelectedModel(deviceName);

    selectDeviceRef.current.innerText = deviceName;
  };

  return (
    <React.Fragment>
      <div className="w-full relative hidden screen_600:flex space-x-8 justify-center items-center h-16 border-b border-gray-500 border-opacity-30">
        <button
          onClick={() => setOpenDevices((prev) => !prev)}
          className="flex space-x-3 items-center ring-1 rounded px-3 py-1"
        >
          <span ref={selectDeviceRef}>Select Device</span>
          {openDevices ? (
            <ChevronUpIcon className="w-4" />
          ) : (
            <ChevronDownIcon className="w-4" />
          )}
        </button>

        <div
          className={`transform origin-top ${
            openDevices
              ? "scale-y-100 opacity-100 z-10"
              : "scale-y-0 opacity-0 z-0"
          } w-96 h-pixel_350 absolute left-0 top-16 bg-gray-100 dark:bg-gray-900 rounded-b-sm shadow-lg ring-8 ring-gray-100 dark:ring-gray-900 overflow-y-scroll track_transparent grid grid-cols-12`}
        >
          <ResponsiveViewName
            model="Default"
            selectedModel={selectedModel}
            onClick={() => modelClickHandler(900, 600, "Default")}
          />

          <ResponsiveViewName
            model="Custom"
            selectedModel={selectedModel}
            onClick={() => modelClickHandler(width, height, "Custom")}
          />

          {typeof allDevices == "object" &&
            Object.entries(allDevices).map(([deviceType, devices], i) => (
              <React.Fragment key={i}>
                <div key={i} className="col-span-12 flex justify-center py-3">
                  <button className="w-11/12 bg-gray-500 p-2 rounded flex justify-center items-center space-x-5">
                    <span className="text-base font-semibold text-white">
                      {deviceType}
                    </span>
                    <ArrowNarrowDownIcon className="w-4 text-white" />
                  </button>
                </div>

                {devices.map(({ model, viewportX, viewportY }, index) => (
                  <ResponsiveViewName
                    key={index}
                    model={model}
                    selectedModel={selectedModel}
                    onClick={() =>
                      modelClickHandler(viewportX, viewportY, model)
                    }
                  />
                ))}
              </React.Fragment>
            ))}
        </div>

        <div>
          <input
            className="w-12 py-0.5 h-6 text-center rounded outline-none ring-1 bg-gray-300 dark:bg-gray-900"
            type="text"
            onChange={widthChangeHandler}
            value={width}
          />
          <span className="mx-1 text-base">&times;</span>
          <input
            className="w-12 py-0.5 h-6 text-center rounded outline-none ring-1 bg-gray-300 dark:bg-gray-900"
            type="text"
            onChange={heightChangeHandler}
            value={height}
          />
        </div>

        <ScaleSelector
          selectedScale={selectedScale}
          setSelectedScale={setSelectedScale}
        />

        <button
          onClick={() => setRotate((prev) => !prev)}
          className={`transform ${
            rotate ? "rotate-45" : "rotate"
          } w-7 h-7 flex items-center justify-center bg-gray-800 rounded-full`}
        >
          <RotateIcon />
        </button>
      </div>

      <ResponsiveDisplay
        preview={preview}
        selectedScale={selectedScale}
        width={width}
        height={height}
        rotate={rotate}
      />
    </React.Fragment>
  );
}
