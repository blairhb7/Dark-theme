import React, { useEffect, useRef, useState } from "react";
import { NeatConfig, NeatGradient } from "@firecms/neat";

 const MyComponent: React.FC = () => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const gradientRef = useRef<NeatGradient | null>(null);

    useEffect(() => {

        if (!canvasRef.current)
            return;

        gradientRef.current = new NeatGradient({
            ref: canvasRef.current,
            "colors": [
                {
                    "color": "#FF5373",
                    "enabled": true
                },
                {
                    "color": "#FFC858",
                    "enabled": true
                },
                {
                    "color": "#05d5ef",
                    "enabled": true
                },
                {
                    "color": "#6D3BFF",
                    "enabled": true
                },
                {
                    "color": "#f5e1e5",
                    "enabled": false
                }
            ],
            "speed": 4,
            "horizontalPressure": 4,
            "verticalPressure": 5,
            "waveFrequencyX": 2,
            "waveFrequencyY": 3,
            "waveAmplitude": 5,
            "shadows": 0,
            "highlights": 1,
            "colorSaturation":  0,
            "colorBrightness":  1,
            "wireframe": true,
            "colorBlending": 6,
            "backgroundAlpha": 0,
            "resolution": 1 / 2
        });

        return gradientRef.current.destroy;

    }, []);

    return (
        <canvas
            style={{
                isolation: "isolate",
                height: "100%",
                width: "100%",
            }}
            ref={canvasRef}
        />
    );
};

export default MyComponent