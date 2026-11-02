---
title: Focal
summary: An asynchronous image processing pipeline built in Java with Spring Boot.
role: Designer and developer
team: Solo project
when: "2026"
stack: Java 21, Spring Boot, Spring Cloud Gateway, RabbitMQ, PostgreSQL, Supabase, Docker
result: A working image pipeline, built alone across four services, that crops, resizes, blurs and filters images.
order: 2
draft: false
---

## The problem

I built Focal to force myself to learn and consolidate advanced backend concepts, and to get familiar with cloud solutions.

## What I built

Focal is split into four services: an API gateway, a user service, an image metadata service and a processing worker.

A request comes in through the gateway, which handles JWT authentication. The metadata service then puts a job on a RabbitMQ queue, and the worker picks it up, processes the image and stores the result in Supabase. PostgreSQL holds the application data, and Docker Compose runs the whole system.

It hasn't been deployed yet.

## The hard decision

The big decision was the architecture. With so many possible points of failure, splitting the system into microservices felt like the right choice to keep it running as reliably as possible.

## What I'd change

I would start simple and iterate. I rushed to build something complex before testing whether it really worked on a smaller scale.
