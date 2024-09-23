package com.seuprojeto.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.type.TypeReference;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

// Classe representando um usuário
class Usuario {
    public String nome;
    public String email;
    public String senha;

    public Usuario(String nome, String email, String senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
}

@RestController
public class CreateAccountController {

    private static final String FILE_PATH = "usuarios.json";

    @PostMapping("/registrar")
    public ResponseEntity<?> registrar(@RequestBody Usuario usuario) {
        // Validação de senha no backend
        if (!isValidPassword(usuario.senha)) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new Resposta("Senha inválida: A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, um número e um caractere especial."));
        }

        try {
            String mensagem = registrarUsuario(usuario.nome, usuario.email, usuario.senha);
            return ResponseEntity.ok().body(new Resposta(mensagem));
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao registrar usuário");
        }
    }

    static class Resposta {
        public String message;

        public Resposta(String message) {
            this.message = message;
        }
    }

    // Método para registrar o usuário
    public static String registrarUsuario(String nome, String email, String senha) throws IOException {
        List<Usuario> usuarios = lerUsuarios();
        Usuario novoUsuario = new Usuario(nome, email, senha);
        usuarios.add(novoUsuario);
        salvarUsuarios(usuarios);
        return "Usuário registrado com sucesso!";
    }

    // Método para salvar os usuários no arquivo JSON
    private static void salvarUsuarios(List<Usuario> usuarios) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        mapper.writeValue(new File(FILE_PATH), usuarios);
    }

    // Método para ler os usuários do arquivo JSON
    private static List<Usuario> lerUsuarios() throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        File file = new File(FILE_PATH);
        if (file.exists()) {
            return mapper.readValue(file, new TypeReference<List<Usuario>>() {});
        } else {
            return new ArrayList<>();
        }
    }

    // Validação de senha no backend (mesma lógica do frontend)
    private static boolean isValidPassword(String password) {
        if (password.length() < 8) return false;
        if (!password.chars().anyMatch(Character::isUpperCase)) return false;
        if (!password.chars().anyMatch(Character::isDigit)) return false;
        String specialChars = "[@$!%*?&]";
        if (!password.matches(".*[" + specialChars + "].*")) return false;

        return true; // Senha válida
    }
}
