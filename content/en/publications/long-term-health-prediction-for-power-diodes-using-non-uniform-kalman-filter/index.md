---
title: Long-Term Health Prediction for Power Diodes Using Non-Uniform Kalman Filter
date: 2026-08-03T00:00:00.000+08:00
authors: Chao Guo and Zhonghai Lu
venue: IEEE Transactions on Reliability
year: 2024
doi: 10.1109/TR.2026.3719753
summary: Kalman filter, long-term forecasting, reliability, power diodes, time
  series analysis.
---
Long-term health prediction is frequently compromised by the accumulation of errors and uncertainty, resulting in unreliable results and degraded performance. The capability of the Kalman Filter (KF) to adjust states based on current measurements can mitigate error accumulation and provide guaranteed results with quantifiable uncertainties. Conventional KF employs a uniform Predict-Update loop in each time step, which is optimal for short-term prediction yet suboptimal for long-term prediction. To address this, we propose a Non-Uniform Kalman Filter (NU-KF), where the predict step occurs at every step but the update step is performed only when the measurement is available. Theoretically, we demonstrate that under the assumption of Linear Time-Invariant systems with Gaussian noise, NU-KF can minimize the mean square error, thus making it an optimal filter in long-term prediction, whereas conventional uniform KF frameworks are shown to be suboptimal in this context. Experimentally, we validate this approach for the long-term health prediction using the accelerated aging dataset of power diodes, utilizing forward voltage drop signal as the health indicator. Evaluated against three benchmark methods, including the golden reference one-step ahead KF (OSA-KF), the conventional recursive multi-step KF (RMS-KF), and the state-of-the-art multi-step ahead Extended Kalman Filter (MSA-EKF), our method achieves a reduction of up to 65.78% in Mean Squared Error (MSE) compared with MSA-EKF, while it achieves comparable performance to OSA-KF. Unlike the exponential error accumulation patterns of RMS-KF and MSA-EKF, our method exhibits linearly bounded error accumulation along with the prediction length, ensuring stable forecasting accuracy for long prediction lengths.
