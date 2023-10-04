"use client";

import { useEffect, useState, useRef } from "react";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// import React, { useEffect,  } from "react";
import * as THREE from "three";
import { FlyControls } from "three/addons/controls/FlyControls.js";

// styles
import { Wrapper, Overlay, Content } from "./HeroSection.Styles";

// Components and widgets
import { Button } from "../../widgets/buttonWidget/ButtonWidget.Styles";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 100], [1, 0]);

  const containerRef = useRef();

  if (typeof window !== "undefined") {
    useEffect(() => {
      const clock = new THREE.Clock();

      const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        15000
      );
      camera.position.z = 1000;

      const scene = new THREE.Scene();
      scene.fog = new THREE.Fog(0x000000, 1, 15000);

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });

      const onWindowResize = () => {
        camera.aspect = (window.innerWidth / window.innerHeight) * 0.5;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      containerRef.current.appendChild(renderer.domElement);

      const controls = new FlyControls(camera, renderer.domElement);
      controls.movementSpeed = 1000;
      controls.rollSpeed = Math.PI / 10;

      const pointLight = new THREE.PointLight("#4169e1");
      pointLight.position.set(0, 0, 0);
      scene.add(pointLight);

      const dirLight = new THREE.DirectionalLight(0xffffff);
      dirLight.position.set(0, 0, 1).normalize();
      scene.add(dirLight);

      const geometry = [
        [new THREE.IcosahedronGeometry(100, 16), 50],
        [new THREE.IcosahedronGeometry(100, 8), 300],
        [new THREE.IcosahedronGeometry(100, 4), 1000],
        [new THREE.IcosahedronGeometry(100, 2), 2000],
        [new THREE.IcosahedronGeometry(100, 1), 8000],
      ];

      const material = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        wireframe: true,
      });

      for (let j = 0; j < 1000; j++) {
        const lod = new THREE.LOD();

        for (let i = 0; i < geometry.length; i++) {
          const mesh = new THREE.Mesh(geometry[i][0], material);
          mesh.scale.set(1.5, 1.5, 1.5);
          mesh.updateMatrix();
          mesh.matrixAutoUpdate = false;
          lod.addLevel(mesh, geometry[i][1]);
        }

        lod.position.x = 10000 * (0.5 - Math.random());
        lod.position.y = 7500 * (0.5 - Math.random());
        lod.position.z = 10000 * (0.5 - Math.random());
        lod.updateMatrix();
        lod.matrixAutoUpdate = false;
        scene.add(lod);
      }

      const render = () => {
        requestAnimationFrame(render);
        controls.update(clock.getDelta());
        renderer.render(scene, camera);
      };

      render();

      window.addEventListener("resize", onWindowResize);
    }, []);
  }

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      const client = new ApolloClient({
        uri: "http://localhost/wp/graphql",
        cache: new InMemoryCache(),
      });

      const response = await client.query({
        query: gql`
          query unemployed {
            post(id: "5", idType: DATABASE_ID) {
              title
            }
          }
        `,
      });

      // const getResponse = response.data.operations.nodes.map(
      //   (item) => item.operations
      // );
      setApiData(response.data.post.title);
    }

    fetchServices();
  }, []);

  return (
    <Wrapper ref={containerRef}>
      <Content>
        <motion.h1 className="my-3">
          {/* Technology solutions for a smarter future */}
          {apiData}
        </motion.h1>
      </Content>
    </Wrapper>
  );
};

export default HeroSection;
