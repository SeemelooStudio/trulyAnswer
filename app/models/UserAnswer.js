﻿// UserAnswer.js

define(["jquery", "backbone"],

    function ($, Backbone) {

        var UserAnswer = Backbone.Model.extend({

            initialize: function (options) {
                this.set({
                    userId: options.userId,
                    questionId: options.questionId,
                    userAnswerText: options.userAnswerText,
                    repliedToUserAnswerId: options.repliedToUserAnswerId
                });
            },

            addAnswer: function (options) {
                var self = this;
                $.ajax({
                    url: "http://192.168.1.103:9009/secretService/UserAnswers",
                    dataType: "json",
                    data: JSON.stringify({
                        userId: self.get("userId"),
                        questionId: self.get("questionId"),
                        userAnswerText: self.get("userAnswerText")
                    }),
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    success: function (data, textStatus, jqXHR) {
                        self.set(data);
                        options.success(data);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        options.error(textStatus + ": " + errorThrown);
                    }
                });
            },

            addReply: function (options) {
                var self = this;
                $.ajax({
                    url: "http://192.168.1.103:9009/secretService/UserAnswers",
                    dataType: "json",
                    data: JSON.stringify({
                        userId: self.get("userId"),
                        questionId: self.get("questionId"),
                        userAnswerText: self.get("userAnswerText"),
                        repliedToUserAnswerId: self.get("repliedToUserAnswerId")
                    }),
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    success: function (data, textStatus, jqXHR) {
                        self.set(data);
                        options.success(data);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        options.error(textStatus + ": " + errorThrown);
                    }
                });
            }

        });

        return UserAnswer;
    }

);